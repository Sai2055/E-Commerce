import { Handbag } from "lucide-react";
import SideBarItem from "./sideBarItem";
import { useState } from "react";
export default function SideBar() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const items = [
    {
      name: "Dashboard",
      icon: "CircleStar",
      path: "/",
    },
    {
      name: "Catalog",
      icon: "SquareStar",
      children: [
        { title: "Products", path: "/products" },
        { title: "Categories", path: "/categories" },
        { title: "Coupons", path: "/coupons" },
      ],
    },
    {
      name: "Customers",
      icon: "UserStar",
      path: "/customers",
    },
    {
      name: "Settings",
      icon: "Settings",
      path: "/settings",
    },
  ];

  const sideBarActiveState = (index) => {
    console.log("clicked index", index);
    setCurrentIndex(index);
  };

  return (
    <div className="shadow-[1px_0_2px_rgba(0,0,0,0.15) w-[250px] ">
      <div className="flex gap-4 p-4 text-[25px] font-bold items-center">
        <Handbag />
        <p>SareeDash</p>
      </div>
      {items.map((item, index) => (
        <SideBarItem
          key={index}
          item={{
            iconName: item.icon,
            title: item.name,
            path: item.path,
            children: item.children,
          }}
          index={index}
          onItemClick={sideBarActiveState}
          currentIndex={currentIndex}
        />
      ))}
    </div>
  );
}
