const Faq = () => {
  return (
    <section className="my-20 md:my-24 lg:my-40 px-8 md:px-30 relative">
      <div className="absolute bg-[rgba(157,255,153,0.1)] w-[500px] h-[720px] top-[-190px] left-[-500px] md:left-[-480px] rotate-[20deg] z-10 blur-[150px] rounded-full"></div>
      <div className="hidden lg:block absolute bg-[rgba(157,255,153,0.1)] w-[500px] h-[720px] -right-20 rotate-[20deg] z-10 blur-[150px] rounded-full"></div>

      <div className="w-full m-auto text-center mb-10 md:mb-[60px]">
        <h2 className="text-2xl md:text-[40px] lg:text-5xl leading-16 text-[#212B36] font-bold mb-2">
          Frequently Asked Questions
        </h2>
        <p className="text-[#637381] text-sm font-normal leading-[150%] md:w-[555px] m-auto">
          Quick answers to help you get the most out of our app.
        </p>
      </div>
      <div className="space-y-4 mt-16">
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white border border-[#C7E6C5] collapse-open"
        >
          <div className="collapse-title font-semibold text-base text-[#212B36] p-6">
            Is the app free to use?
          </div>
          <div className="collapse-content text-sm font-normal text-[#637381]">
            Yes! We offer a free plan for individuals and small teams. Paid
            plans unlock more features for scaling businesses.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white border border-[#C7E6C5] "
        >
          <div className="collapse-title font-semibold text-base text-[#212B36] p-6">
            Does it work on both mobile and desktop?
          </div>
          <div className="collapse-content text-sm font-normal text-[#637381]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit aperiam maxime nemo cumque eligendi nihil. Consectetur
            sit voluptatem aspernatur beatae?
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white border border-[#C7E6C5]"
        >
          <div className="collapse-title font-semibold text-base text-[#212B36] p-6">
            Is the app free to use?
          </div>
          <div className="collapse-content text-sm font-normal text-[#637381]">
            Yes! We offer a free plan for individuals and small teams. Paid
            plans unlock more features for scaling businesses.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus bg-white border border-[#C7E6C5] "
        >
          <div className="collapse-title font-semibold text-base text-[#212B36] p-6">
            Does it work on both mobile and desktop?
          </div>
          <div className="collapse-content text-sm font-normal text-[#637381]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit aperiam maxime nemo cumque eligendi nihil. Consectetur
            sit voluptatem aspernatur beatae?
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
