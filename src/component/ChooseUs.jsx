import analyticsIcon from "../assets/icon/analyticsIcon.png";
import bookingIcon from "../assets/icon/bookingIcon.png";
import secureIcon from "../assets/icon/secureIcon.png";
import trackingIcon from "../assets/icon/trackingIcon.png";

const ChooseUs = () => {
  return (
    <section className="px-8 md:pl-30 grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-30 lg:mt-20">
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
            Comprehensive reporting and insights to improve business operations
            and efficiency.
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
    </section>
  );
};

export default ChooseUs;
