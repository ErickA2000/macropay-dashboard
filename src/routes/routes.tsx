import Configuration from "@Pages/configuration";
import Dashboard from "@Pages/dashboard";
import Tickets from "@Pages/tickets";
import User from "@Pages/users";
import { Navigate } from "react-router-dom";

export const ROUTES = [
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/tickets",
        element: <Tickets/>
    },
    {
        path: "/users",
        element: <User/>
    },
    {
        path: "/config",
        element: <Configuration/>
    },
    {
        path: "/*",
        element: <Navigate to={"/"}/>
    }
];