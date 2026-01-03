import SideBar from "./components/layout/admin/SideBar";

function App() {
  return (
    <div>
      <div className="flex border border-black w-full h-screen">
        <SideBar />
        <div className="border border black flex flex-col w-full">
          <div className="border border black h-[30px]">NavBar</div>
          <div className="border border black h-full"> Maincontent</div>
        </div>
      </div>
    </div>
  );
}

export default App;
