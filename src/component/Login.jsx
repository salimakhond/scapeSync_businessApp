import logo from "../assets/logo.svg";
import googleIcon from "../assets/icon/googleIcon.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email, password, checkbox } = Object.fromEntries(formData);
    const remember_me = !!checkbox;

    try {
      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            remember_me,
          }),
        }
      );

      const data = await response.json();
      console.log("Login response:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        // history.push("/dashboard"); // redirect to dashboard
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
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
            Welcome to ScapeSync
          </h4>
          <p className="text-[#637381] text-base font-normal">
            Please share your login details so you can access the website.
          </p>
        </div>
        <form onSubmit={handleLogin} className="fieldset">
          <input
            type="email"
            name="email"
            className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
            placeholder="Email"
          />
          <div className="relative w-full">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] pr-10 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
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

          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox bg-[#49AE44]"
                style={{ background: "#49AE44", color: "white" }}
              />
              <p className="text-[#212B36] text-sm font-normal">Remember me</p>
            </div>
            <div className="text-sm font-normal text-[#49AE44]">
              <Link to={""}>Forgot password?</Link>
            </div>
          </div>

          <input
            type="submit"
            className="bg-[#49AE44] font-bold text-base text-white rounded-lg py-3 mt-6 mb-12 cursor-pointer"
            value="Login"
          />
        </form>
        <div className="divider border-[rgba(145,158,171,0.24)]">OR</div>
        <button className="btn w-full mt-4 border-[rgba(145,158,171,0.32)] font-bold text-base text-[rgba(99,115,129,1)] bg-transparent rounded-lg py-3 mb-8">
          <img src={googleIcon} alt="" /> Log in with Google
        </button>
        <p className="text-center text-sm font-normal text-[#212B36]">
          Don’t have an account?{" "}
          <Link className="text-[#49AE44]" to={"register"}>
            Get started
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
