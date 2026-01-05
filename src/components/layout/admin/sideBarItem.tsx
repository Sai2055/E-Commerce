import * as Icons from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideBarItem({
  item,
  onItemClick,
  index,
  currentIndex,
}) {
  const Icon = Icons[item.iconName]; // get the component
  const [isClicked, setIsClicked] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  function handleDropDown() {
    onItemClick(index);
    if (!item.children) return;
    setIsClicked((prev) => !prev);
  }
  return (
    <>
      <div
        className={`flex p-4 gap-4 items-center  ${
          currentIndex === index ? "bg-green-200" : ""
        }`}
        onClick={handleDropDown}
      >
        <div className="text-green-600">{Icon && <Icon />}</div>
        <div>
          {item.path ? (
            <NavLink
              to={`${item.path}`}
              onClick={(e) => e.stopPropagation()}
              // className={({ isActive }) => (isActive ? "bg-green-200" : "")}
            >
              {item.title}
            </NavLink>
          ) : (
            <span>{item.title}</span>
          )}
        </div>
        {item.children &&
          (isClicked ? (
            <Icons.ChevronDown
              onClick={(e) => {
                e.stopPropagation();
                handleDropDown();
              }}
            />
          ) : (
            <Icons.ChevronRight
              onClick={(e) => {
                e.stopPropagation();
                handleDropDown();
              }}
            />
          ))}
      </div>

      {isClicked && (
        <div className="block pl-14">
          {item.children?.map((child, index) => (
            <div key={index} className="">
              <NavLink
                to={`${child.path}`}
                onClick={(e) => e.stopPropagation()}
              >
                {child.title}
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
