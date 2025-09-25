import vectorBottom from "../assets/servicesTextBottom.png";
import servicesImgOne from "../assets/servicesImgOne.png";
import servicesImgTwo from "../assets/servicesIngTwo.png";
import servicesImgThree from "../assets/servicesImgThree.png";
import servicesRightV from "../assets/servicesRightV.png";
import servicesMiddleV from "../assets/servicesMiddleV.png";
import servicesLeftV from "../assets/servicesLeftV.png";

const Services = () => {
  return (
    <section className="mt-30 lg:mt-40 px-8 md:px-30">
      <div className="w-full m-auto text-center">
        <div className="relative">
          <h2 className="text-4xl md:text-[44px] lg:text-5xl leading-16 text-[#212B36] font-bold mb-3 z-10">
            Build for Everyone
          </h2>
          <img
            src={vectorBottom}
            alt="bottom vector"
            className="absolute -bottom-[6px] md:bottom-1 left-6/9 md:left-6/9 lg:left-4/7 transform -translate-x-1/2 -translate-y-1/2 -z-10"
          />
        </div>
        <p className="text-[#637381] text-sm font-normal leading-[150%] md:w-[555px] m-auto">
          Whether you're booking services, managing tasks, or running
          operations, we've designed the perfect experience for you.
        </p>
      </div>

      <div className="mt-20 ">
        <div className="relative">
          <img
            src={servicesLeftV}
            alt="service vector icon"
            className="absolute -top-16 lg:-top-24 left-0 lg:left-1/11"
          />
          <img
            src={servicesMiddleV}
            alt="service vector icon"
            className="absolute -top-20 left-1/2 -translate-x-1/2"
          />
          <img
            src={servicesRightV}
            alt="service vector icon"
            className="hidden lg:block absolute -top-20 right-0"
          />
        </div>
        {/* single service */}
        <div className="hero-content max-w-full p-0 gap-5 flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-6/12 relative">
            <img
              src={servicesImgOne}
              alt="servicesImg"
              className="w-full z-10"
            />
            <div className="hidden lg:block absolute -top-[110px] left-[100px] w-[500px] h-[650px] bg-[rgba(155,255,150,0.1)] -rotate-45 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute -bottom-1 left-0 w-full h-50 bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <div className="w-full lg:w-6/12 mt-10 relative">
            {/*  shadow */}
            <div className="hidden md:block absolute bg-[rgba(157,255,153,0.2)] w-[400px] h-[520px] top-[-156px] left-[-500px] md:left-[-425px] rotate-[-54deg] z-10 blur-[250px]  rounded-full"></div>

            <button className="text-[#3BA334] font-semibold text-sm px-5 py-[6px] border border-[#3BA334] rounded-[60px] mb-4">
              Users
            </button>
            <h4 className="text-2xl text-[#212B36] font-bold mb-4">
              Book services, track progress and stay updated
            </h4>
            <p className=" text-[#637381] text-lg font-normal leading-[160%]">
              Easily schedule appointments, get real-time updates, and enjoy a
              smooth, transparent service experience.
            </p>
            <ul className="mt-8">
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[#3BA334] pl-5">
                Book services in seconds
              </li>
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[rgba(59,163,52,0.7)] pl-5">
                Track real-time job updates
              </li>
              <li className="text-lg font-medium text-[#0F172A]  mb-5 border-l-3 border-[rgba(59,163,52,0.4)] pl-5">
                Schedule appointments at your convenience
              </li>
            </ul>
          </div>
        </div>
        {/* single service */}
        <div className="hero-content max-w-full p-0 gap-5 flex-col lg:flex-row mt-10">
          <div className="w-full lg:w-6/12 relative">
            <img
              src={servicesImgTwo}
              alt="servicesImg"
              className="w-full z-10"
            />
            <div className="hidden lg:block absolute -top-[120px] -left-[80px] w-[500px] h-[650px] bg-[rgba(155,255,150,0.1)] rotate-45 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute -bottom-1 left-0 w-full h-50 bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <div className="w-full lg:w-6/12 mt-10 relative">
            {/*  shadow */}
            <div className="hidden md:block  absolute bg-[rgba(157,255,153,0.2)] w-[400px] h-[520px] top-[-156px] md:right-[10px] lg:right-[-210px] rotate-[-54deg] z-10 blur-[250px] rounded-full"></div>

            <button className="text-[#3BA334] font-semibold text-sm px-5 py-[6px] border border-[#3BA334] rounded-[60px] mb-4">
              Business Owners
            </button>
            <h4 className="text-2xl  text-[#212B36] font-bold mb-4">
              Assign jobs, monitor performance, and streamline operations.
            </h4>
            <p className=" text-[#637381] text-lg font-normal leading-[160%]">
              Gain full control of your workforce with real-time tracking, smart
              scheduling, and service management in one app.
            </p>
            <ul className="mt-8">
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[#3BA334] pl-5">
                Book services in seconds
              </li>
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[rgba(59,163,52,0.7)] pl-5">
                Track real-time job updates
              </li>
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[rgba(59,163,52,0.4)] pl-5">
                Schedule appointments at your convenience
              </li>
            </ul>
          </div>
        </div>
        {/* single service */}
        <div className="hero-content max-w-full p-0 gap-5 flex-col lg:flex-row-reverse mt-10">
          <div className="w-full lg:w-6/12 relative">
            <img
              src={servicesImgThree}
              alt="servicesImg"
              className="w-full z-10"
            />
            <div className="hidden lg:block absolute -top-[150px] left-[120px] w-[500px] h-[650px] bg-[rgba(155,255,150,0.1)] -rotate-45 blur-[120px] rounded-full -z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-50 bg-gradient-to-t from-white to-transparent"></div>
          </div>
          <div className="w-full lg:w-6/12 mt-10 relative">
            {/*  shadow */}
            <div className="hidden md:block absolute bg-[rgba(157,255,153,0.2)] w-[400px] h-[520px] top-[-156px] left-[-500px] md:left-[-425px] rotate-[-54deg] z-10 blur-[250px] rounded-full"></div>

            <button className="text-[#3BA334] font-semibold text-sm px-5 py-[6px] border border-[#3BA334] rounded-[60px] mb-4">
              Employees
            </button>
            <h4 className="text-2xl  text-[#212B36] font-bold mb-4">
              See tasks, track time, and navigate routes with ease.
            </h4>
            <p className=" text-[#637381] text-lg font-normal leading-[160%]">
              Everything you need to manage your workday from job assignments to
              optimized routes and time logging.
            </p>
            <ul className="mt-8">
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[#3BA334] pl-5">
                Book services in seconds
              </li>
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[rgba(59,163,52,0.7)] pl-5">
                Track real-time job updates
              </li>
              <li className="text-lg font-medium text-[#0F172A] mb-5 border-l-3 border-[rgba(59,163,52,0.4)] pl-5">
                Schedule appointments at your convenience
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
