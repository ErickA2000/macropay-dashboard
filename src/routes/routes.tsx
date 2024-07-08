import Configuration from "@Pages/configuration";
import EditCatalog from "@Pages/configuration/editCatalog";
import Dashboard from "@Pages/dashboard";
import Home from "@Pages/home";
import Tickets from "@Pages/tickets";
import User from "@Pages/users";
import { Navigate, RouteObject } from "react-router-dom";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
      {
        path: "/users",
        element: <User />,
      },
      {
        path: "/config",
        element: <Configuration />,
        children: [
          {
            path: "edit-catalog",
            element: <EditCatalog/>
          }
        ]
      },
      {
        path: "/*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
];
