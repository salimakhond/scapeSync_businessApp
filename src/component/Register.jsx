import logo from "../assets/logo.svg";
import googleIcon from "../assets/icon/googleIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setConfShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      checkbox,
    } = Object.fromEntries(formData);
    const terms = !!checkbox;

    if (password !== password_confirmation) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name,
            last_name,
            email,
            password,
            password_confirmation,
            terms,
          }),
        }
      );

      const data = await response.json();
      // console.log("Registration response:", data);

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.message || "Registration successful!"} `,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/verify_otp");
      } else {
        setError(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto public-sans">
      <div className="py-6 px-8 mb-3">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="p-8 md:p-0 w-[480px] m-auto bg-white min-h-screen">
        <div className="text-center mb-16">
          <h4 className="text-[rgba(33,43,54,1)] font-bold text-2xl mb-2">
            Create your Account
          </h4>
          <p className="text-[#637381] text-base font-normal">
            When sports Meets smart Tech.
          </p>
        </div>
        <form onSubmit={handleRegister} className="fieldset">
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              name="first_name"
              className="input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last_name"
              className="input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
            placeholder="Email"
            required
          />
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] pr-10 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-[20px] text-[#919EAB] cursor-pointer z-10"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <FaEyeSlash className="text-xl" />
              ) : (
                <FaEye className="text-xl" />
              )}
            </button>
          </div>
          <div className="relative w-full">
            <input
              type={showConfPass ? "text" : "password"}
              name="password_confirmation"
              className="mb-4 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
              placeholder="Confirm Password"
              required
            />
            <button
              type="button"
              className="absolute right-4 top-[20px] text-[#919EAB] cursor-pointer z-10"
              onClick={() => setConfShowPass(!showConfPass)}
            >
              {showConfPass ? (
                <FaEyeSlash className="text-xl" />
              ) : (
                <FaEye className="text-xl" />
              )}
            </button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <input
              type="checkbox"
              name="checkbox"
              className="checkbox bg-[#49AE44]"
              style={{ background: "#49AE44", color: "white" }}
              required
            />
            <p className="text-[#212B36] text-sm font-normal">
              I agree to Tech Takes{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy.
              </a>
            </p>
          </div>
          <input
            type="submit"
            className="!bg-[#49AE44] drop-shadow-[0_8px_16px_rgba(57,164,50,0.24)] font-bold text-base text-white rounded-lg py-3 mt-6 cursor-pointer"
            value="Create Account"
          />

          {error && (
            <p className="text-[#da4f49] text-center text-sm font-normal mt-6">
              {error}
            </p>
          )}
        </form>

        <div className="divider border-[rgba(145,158,171,0.24)] mt-12">OR</div>
        <button className="btn w-full mt-4 border-[rgba(145,158,171,0.32)] font-bold text-base text-[rgba(99,115,129,1)] bg-transparent rounded-lg py-3 mb-8">
          <img src={googleIcon} alt="" /> Continue with Google
        </button>
        <p className="text-center text-sm font-normal text-[#212B36]">
          Already have an account?{" "}
          <Link className="text-[#49AE44]" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
