import React from "react";
import HeroArea from "./HeroArea";
import Services from "./Services";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import ChooseUs from "./ChooseUs";

const Home = () => {
  return (
    <>
      <HeroArea />
      <ChooseUs />
      <Services />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
