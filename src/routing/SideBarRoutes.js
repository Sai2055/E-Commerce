import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "../pages/admin/Dashboard";

import Customers from "../pages/admin/Customers";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";

export const sideBarRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "Customers",
        element: <Customers />,
      },
      {
        path: "Orders",
        element: <Orders />,
      },
      {
        path: "Products",
        element: <Products />,
      },
      {
        path: "Categories",
        element: <Categories />,
      },
    ],
  },
]);
