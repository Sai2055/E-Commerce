import { Outlet } from "react-router-dom";

import NavBar from "../components/layout/admin/NavBar";
import SideBar from "../components/layout/admin/SideBar";

export default function Layout() {
  return (
    <div>
      <div className="flex w-full h-screen">
        <SideBar />

        <div className="shadow-lg flex flex-col w-full">
          <NavBar />
          <Outlet />
        </div>

        <div></div>
      </div>
    </div>
  );
}
