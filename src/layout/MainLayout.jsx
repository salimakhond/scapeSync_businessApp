import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto public-sans">
      <Outlet />
    </div>
  );
};

export default MainLayout;
