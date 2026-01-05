import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/admin/Dashboard";

import Customers from "../pages/admin/Customers";

import Products from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";
import Settings from "../pages/admin/Settings";

const sideBarRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
export default sideBarRoutes;
