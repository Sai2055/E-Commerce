import { Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";

export default function Layout() {
  retrun(
    <div>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
}
