import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

const MainLayout = () => {
  return (
    <>
      <main className="max-w-[1440px] mx-auto public-sans">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
