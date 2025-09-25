import quatSign from "../assets/icon/quatSign.png";
import teamOne from "../assets/teamOne.png";
import teamTwo from "../assets/teamTwo.png";
import teamThree from "../assets/teamThree.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Farzana H.",
      img: teamOne,
      title: "Owner, CleanPro Services",
      text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
      name: "Ahmed R.",
      img: teamTwo,
      title: "Technician",
      text: "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    },
    {
      name: "Farzana H.",
      img: teamOne,
      title: "Owner, CleanPro Services",
      text: "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
      name: "Farzana H.",
      img: teamThree,
      title: "Rafiq M., Homeowner",
      text: "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    },
  ];

  return (
    <section className="mt-20 md:mt-24 lg:mt-40 px-8 md:px-30">
      <div className="w-full m-auto text-center mb-10 md:mb-[60px]">
        <h2 className="text-2xl md:text-[44px] lg:text-5xl leading-16 text-[#212B36] font-bold mb-2">
          What Our Users Are Saying
        </h2>
        <p className="text-[#637381] text-sm font-normal leading-[150%] md:w-[555px] m-auto">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>
      </div>

      <div className="relative">
        <div className="absolute top-1/2 left-1/2 w-10/12 h-10/12 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(155,255,150,0.1)]  blur-[120px] rounded-full -z-10"></div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          className="mySwiper"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="p-7 rounded-[22px] bg-white shadow-[0_16px_32px_-4px_rgba(146,171,145,0.1)]">
                <div className="mb-7 flex items-center gap-4">
                  <img src={t.img} alt="team image" />
                  <div>
                    <h4 className="text-[#212B36] font-bold text-base">
                      {t.name}
                    </h4>
                    <span className="text-[#637381] font-normal text-sm">
                      {t.title}
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={quatSign}
                    alt="Quotation Sign"
                    className="absolute -left-4 -top-4 -z-10"
                  />
                  <p className="text-[#637381] font-normal text-base ">
                    {t.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
