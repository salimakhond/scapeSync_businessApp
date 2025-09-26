import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import footerLogo from "../assets/footerLogo.png";
import footerStoreLogo from "../assets/footerStoreLogo.png";
import { FaXTwitter } from "react-icons/fa6";
import footerVectorOne from "../assets/footerVectorOne.png";
import footerVectorTwo from "../assets/footerVectorTwo.png";
import footerVectorThree from "../assets/footerVectorThree.png";

const Footer = () => {
  return (
    <footer className="public-sans bg-[#0F3B34] pt-16 md:pt-[100px] ">
      <div className="max-w-[1440px] mx-auto px-8 md:px-30 mb-16">
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-0 items-center justify-between">
          <div className="col-span-3">
            <a href="/">
              <img src={footerLogo} alt="logo" />
            </a>
          </div>
          <div className="col-span-5 mr-[50px] md:mr-[100px]">
            <p className="text-base font-medium text-[#CFD8D6]">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>
          </div>
          <div className="col-span-4 flex justify-end">
            <a href="/">
              <img src={footerStoreLogo} alt="App store logo" />
            </a>
          </div>
        </div>
        <div className="flex flex-row space-x-8 mt-[100px]">
          <FaYoutube className="text-white text-3xl" />
          <FaXTwitter className="text-white text-3xl" />
          <FaFacebook className="text-white text-3xl" />
          <FaInstagram className="text-white text-3xl" />
        </div>
      </div>
      <div className="divider bg-[rgba(215,218,224,1)] h-[1px] opacity-25"></div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-30">
        <p className="text-[#E5E5E5] text-sm font-normal text-center opacity-25 pb-4">
          © 2021-2025, ScapeSync. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
