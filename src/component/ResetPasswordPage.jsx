import logo from "../assets/logo.svg";

const ResetPasswordPage = () => {
  const handleResetPassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { email } = Object.fromEntries(formData);
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
            Forgot your password?
          </h4>
          <p className="text-[#637381] text-base font-normal">
            Please enter the email address associated with your account, and
            we'll email you a link to reset your password.
          </p>
        </div>
        <form onSubmit={handleResetPassword} className="fieldset">
          <input
            type="email"
            name="email"
            className="mb-6 input w-full text-base text-[#212B36] placeholder-[#919EAB] h-14 font-normal pl-[14px] px-4 border-[#919EAB52] rounded-lg focus:outline-none focus:border-[#919EAB52] focus:ring-0"
            placeholder="Email"
          />

          <input
            type="submit"
            className="bg-[#49AE44] font-bold text-base text-white rounded-lg py-3 mb-6 cursor-pointer"
            value="Reset Password"
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
