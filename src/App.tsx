import { Route, RouterProvider, Routes } from "react-router-dom";

import sideBarRoutes from "./routing/SideBarRoutes";
function App() {
  return (
    <div>
      <RouterProvider router={sideBarRoutes} />
    </div>
  );
}

export default App;
