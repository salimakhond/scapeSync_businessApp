import React from "react";
import HeroArea from "../component/HeroArea";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto public-sans">
      <HeroArea></HeroArea>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
