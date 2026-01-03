import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <div className="border border black w-[400px] pt-6 pl-6">
      <SideBarItem
        item={{
          iconName: "Dashboard",
          title: "Dashboard",
        }}
      />
    </div>
  );
}
