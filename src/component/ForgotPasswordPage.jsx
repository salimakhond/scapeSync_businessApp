import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaChevronLeft } from "react-icons/fa";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);
    if (!email) {
      alert("Please enter your email");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      //   console.log("Forget Password response:", data);

      if (response.ok) {
        alert(
          "If this email is registered, a password reset link has been sent."
        );
        navigate("/forgot-verify-otp");
      } else {
        alert("Failed to send reset link. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
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
        <button className="text-sm font-bold text-[#49AE44] flex items-center gap-2 p-1 mb-8">
          <FaChevronLeft className="text-lg" />
          <Link to={"/login"}>Back</Link>
        </button>
        <div className="text-left mb-16">
          <h4 className="text-[rgba(33,43,54,1)] font-bold text-2xl mb-2">
            Forgot your password?
          </h4>
          <p className="text-[#637381] text-base font-normal">
            Please enter the email address associated with your account, and
            we'll email you a link to reset your password.
          </p>
        </div>
        <form onSubmit={handleForgotPassword} className="fieldset">
          <input
            type="email"
            name="email"
            className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
            placeholder="Email"
          />

          <input
            type="submit"
            className="!bg-[#49AE44] drop-shadow-[0_8px_16px_rgba(57,164,50,0.24)] font-bold text-base text-white rounded-lg py-3 mb-6 cursor-pointer"
            value="Reset Password"
          />
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
