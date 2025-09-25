import googleIcon from "../assets/icon/googleIcon.png";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
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
      console.log("Registration response:", data);
      console.log(data.token);
      // If success, maybe save token
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="mt-30 p-8 md:p-0 w-[480px] m-auto bg-white min-h-screen">
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
          />
          <input
            type="text"
            name="last_name"
            className="input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
            placeholder="Last Name"
          />
        </div>
        <input
          type="email"
          name="email"
          className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
          placeholder="Email"
        />
        <input
          type="text"
          name="password"
          className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
          placeholder="Password"
        />
        <input
          type="text"
          name="password_confirmation"
          className="mb-4 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
          placeholder="Confirm Password "
        />
        <div className="flex justify-center items-center gap-3">
          <input
            type="checkbox"
            name="checkbox"
            className="checkbox bg-[#49AE44]"
            style={{ background: "#49AE44", color: "white" }}
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
          className="bg-[#49AE44] font-bold text-base text-white rounded-lg py-3 mt-6 mb-12"
          value="Create Account"
        />
      </form>
      <div className="divider border-[rgba(145,158,171,0.24)]">OR</div>
      <button className="btn w-full mt-4 border-[rgba(145,158,171,0.32)] font-bold text-base text-[rgba(99,115,129,1)] bg-transparent rounded-lg py-3 mb-8">
        <img src={googleIcon} alt="" /> Continue with Google
      </button>
      <p className="text-center text-sm font-normal text-[#212B36]">
        Don’t have an account?
        <Link className="text-[#49AE44]" to={""}>
          {" "}
          Get started
        </Link>
      </p>
    </div>
  );
};

export default Register;
