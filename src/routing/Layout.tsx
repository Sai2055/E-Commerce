import { Outlet } from "react-router-dom";

import NavBar from "../components/layout/admin/NavBar";
import SideBar from "../components/layout/admin/SideBar";

export default function Layout() {
  return (
    <div>
      <div className="flex w-full h-screen">
        <SideBar />

        <div className="shadow-lg flex flex-col w-full bg-[oklch(98%_0.016_73.684)] ">
          <NavBar />
          <Outlet />
        </div>

        <div></div>
      </div>
    </div>
  );
}
