import logo from "../assets/logo.svg";
import heroPhone from "../assets/heroPhone.png";
import storeLogo from "../assets/heroStoreImg.png";
import vectorTop from "../assets/textVectorTop.png";
import vectorBottom from "../assets/textVectorBottom.png";
import analyticsIcon from "../assets/icon/analyticsIcon.png";
import bookingIcon from "../assets/icon/bookingIcon.png";
import secureIcon from "../assets/icon/secureIcon.png";
import trackingIcon from "../assets/icon/trackingIcon.png";
const HeroArea = () => {
  return (
    <section className="relative">
      {/* top-left-shadow */}
      <div className="absolute bg-[rgba(157,255,153,0.2)] w-[560px] h-[630px] top-[-156px] left-[-700px] md:left-[-350px] rotate-[-33deg] z-10 blur-[200px]  rounded-full"></div>

      {/* navbar */}
      <div className="navbar py-5 px-8 md:px-30">
        <div className="flex-1">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex-none">
          <button className="btn bg-[#3BA334] drop-shadow-[0_8px_16px_rgba(57,164,50,0.24)] font-bold text-base text-white mx-[26] my-[10px]">
            Get Started
          </button>
        </div>
      </div>

      {/* heroArea */}
      <div className="px-8 md:pl-30  hero">
        <div className="hero-content max-w-full p-0 flex-col lg:flex-row-reverse">
          <div className="lg:w-6/12 relative">
            <img src={heroPhone} alt="hero phone" className="w-full" />
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <div className="lg:w-6/12">
            <div className="relative w-full">
              <img
                src={vectorTop}
                alt="top vector"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
              <h1 className="text-[44px] md:text-[84px] leading-16 md:leading-24 text-[#212B36] font-bold mb-4 z-10">
                All Your Jobs One Smart App
              </h1>
              <img
                src={vectorBottom}
                alt="bottom vector"
                className="absolute -bottom-1 right-0 md:right-5 -z-10"
              />
            </div>
            <p className="p-0 md:pr-40 text-[#637381] text-base font-normal">
              Built for business owners, employees, and clients streamline job
              scheduling, service tracking, and team management in one powerful
              app.
            </p>
            <div className="mt-12 md:mt-16 ">
              <a href="/">
                <img src={storeLogo} alt="App store logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* choose-us */}
      <div className="px-8 md:pl-30 grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-30 lg:mt-20">
        <div className="text-left md:border-r md:border-[#F4F6F8] pr-9">
          <img
            src={bookingIcon}
            alt="bookingIcon"
            className="bg-[#ECFCEB] p-3 rounded-lg"
          />
          <div className="mt-5">
            <h4 className="font-bold text-lg text-[#212B36] leading-7 mb-1">
              Easy Service Booking
            </h4>
            <p className="text-[#637381] text-sm leading-[150%]">
              Streamlined booking process for clients with service catalogs and
              availability.
            </p>
          </div>
        </div>
        <div className="text-left lg:border-r lg:border-[#F4F6F8] pr-9">
          <img
            src={trackingIcon}
            alt="trackingIcon"
            className="bg-[#ECFCEB] p-3 rounded-lg"
          />
          <div className="mt-5">
            <h4 className="font-bold text-lg text-[#212B36] leading-7 mb-1">
              Real-Time Tracking
            </h4>
            <p className="text-[#637381] text-sm leading-[150%]">
              Monitor job progress, employee hours, and project timelines with
              live updates.
            </p>
          </div>
        </div>
        <div className="text-left md:border-r md:border-[#F4F6F8] pr-9">
          <img
            src={analyticsIcon}
            alt="analyticsIcon"
            className="bg-[#ECFCEB] p-3 rounded-lg"
          />
          <div className="mt-5">
            <h4 className="font-bold text-lg text-[#212B36] leading-7 mb-1">
              Performance Analytics
            </h4>
            <p className="text-[#637381] text-sm leading-[150%]">
              Comprehensive reporting and insights to improve business
              operations and efficiency.
            </p>
          </div>
        </div>
        <div className="text-left pr-9">
          <img
            src={secureIcon}
            alt="secureIcon"
            className="bg-[#ECFCEB] p-3 rounded-lg"
          />
          <div className="mt-5">
            <h4 className="font-bold text-lg text-[#212B36] leading-7 mb-1">
              Secure & Reliable
            </h4>
            <p className="text-[#637381] text-sm leading-[150%]">
              Enterprise-grade security with 99.9% uptime guarantee and data
              protection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroArea;
