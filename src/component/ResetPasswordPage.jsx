import logo from "../assets/logo.svg";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ResetPasswordPage = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfPass, setConfShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const { password, password_confirmation } = Object.fromEntries(formData);

    if (password !== password_confirmation) {
      setError("Passwords do not match!");
      return;
    }

    const token = localStorage.getItem("reset_token");
    // console.log(token);

    if (!token) {
      setError("Token not found. Please verify OTP again.");
      return;
    }

    try {
      const body = new FormData();
      body.append("password", password);
      body.append("password_confirmation", password_confirmation);
      body.append("token", token);

      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/reset-password",
        {
          method: "POST",
          body: body,
        }
      );

      const data = await response.json();
      // console.log("Reset Password response:", data);

      if (response.ok) {
        localStorage.removeItem("reset_token");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.message || "Password reset successful!"} `,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        setError(data.message || "Failed to reset password");
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      setError("Something went wrong!");
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
          <Link to={"/forgot-verify-otp"}>Back</Link>
        </button>
        <div className="text-left mb-16">
          <h4 className="text-[rgba(33,43,54,1)] font-bold text-2xl mb-2">
            Enter Your New Password.
          </h4>
          <p className="text-[#637381] text-base font-normal">
            Please enter the email address associated with you account, and we
            we'll email you a link to reset password.
          </p>
        </div>
        <form onSubmit={handleResetPassword} className="fieldset">
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
          <input
            type="submit"
            className="!bg-[#49AE44] drop-shadow-[0_8px_16px_rgba(57,164,50,0.24)] font-bold text-base text-white rounded-lg py-3 mt-6 cursor-pointer"
            value="Reset Password"
          />

          {error && (
            <p className="text-[#da4f49] text-center text-sm font-normal mt-6">
              {error}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
