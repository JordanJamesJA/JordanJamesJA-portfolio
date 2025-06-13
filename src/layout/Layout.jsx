import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Layout = () => {
  return (
    <>
      <div className="relative">
        <Navbar />
        <main className=" min-h-screen">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
