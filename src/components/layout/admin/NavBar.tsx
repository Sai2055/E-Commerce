import { Bell, Menu, Moon, UserRound } from "lucide-react";

export default function NavBar() {
  return (
    <div className="shadow-[0_1px_2px_rgba(0,0,0,0.15)] bg-white h-[65px] w-full flex justify-between items-center px-6 py-4">
      <Menu />

      <div className="flex gap-8">
        <Moon />
        <Bell />
        <UserRound />
      </div>
    </div>
  );
}
