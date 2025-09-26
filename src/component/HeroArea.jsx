import logo from "../assets/logo.svg";
import heroPhone from "../assets/heroPhone.png";
import storeLogo from "../assets/heroStoreImg.png";
import vectorTop from "../assets/textVectorTop.png";
import vectorBottom from "../assets/textVectorBottom.png";
import { Link } from "react-router-dom";

const HeroArea = () => {
  return (
    <section className="relative">
      {/* top-left-shadow */}
      <div className="absolute bg-[rgba(157,255,153,0.2)] w-[560px] h-[630px] top-[-156px] left-[-700px] md:left-[-350px] rotate-[-33deg] z-10 blur-[200px]  rounded-full"></div>

      {/* navbar */}
      <nav className="navbar py-5 px-8 md:px-30">
        <div className="flex-1">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="flex-none">
          <Link to={"register"}>
            <button className="btn bg-[#3BA334] drop-shadow-[0_8px_16px_rgba(57,164,50,0.24)] font-bold text-base text-white mx-[26] my-[10px]">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

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
    </section>
  );
};

export default HeroArea;
