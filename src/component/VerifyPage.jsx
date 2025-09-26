import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

const VerifyPage = () => {
  const [otpCode, setOtpCode] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    const newOtp = [...otpCode];
    newOtp[index] = element.value;
    setOtpCode(newOtp);

    if (element.value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const otp = otpCode.join("");

    if (otp.length < 6) {
      alert("Please enter all 6 digits of OTP");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", otp);

      const response = await fetch(
        "https://apitest.softvencefsd.xyz/api/verify_otp",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      // console.log("OTP verified response:", data);

      if (response.ok) {
        alert("OTP verified successfully!");
        navigate("/login");
      } else {
        alert("OTP verification failed");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
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
          <Link to={"/register"}>Back</Link>
        </button>
        <div className="text-left mb-16">
          <h4 className="text-[rgba(33,43,54,1)] font-bold text-2xl mb-2">
            Please check your email!
          </h4>
          <p className="text-[#637381] text-base font-normal">
            We've emailed a 6-digit confirmation code to acb@domain, please
            enter the code in below box to verify your email.
          </p>
        </div>
        <form onSubmit={handleVerifyOtp} className="fieldset">
          <input
            type="email"
            name="email"
            className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
            placeholder="Email"
          />

          <div className="flex justify-between mb-6">
            {otpCode.map((data, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                name={`otp-${index}`}
                maxLength="1"
                className="input w-[50px] h-14 text-center text-xl border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#49AE44]"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                required
              />
            ))}
          </div>

          <input
            type="submit"
            className="!bg-[#49AE44] drop-shadow-[0_8px_16px_rgba(57,164,50,0.24)] font-bold text-base text-white rounded-lg py-3 mb-6 cursor-pointer"
            value="Verify"
          />
        </form>

        <p className="text-center text-sm font-normal text-[#212B36]">
          Don’t have a code?{" "}
          <Link className="text-[#49AE44]" to={""}>
            Resend code
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyPage;
