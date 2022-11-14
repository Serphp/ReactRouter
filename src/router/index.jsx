import { createBrowserRouter } from "react-router-dom";

import User from "../layout/User";
import Admin from "../layout/Admin";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Registro from "../pages/registro";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <User />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/registro",
                element: <Registro />
            },
            {
                path: "/dashboard",
                element: <Admin />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                ],
            },
        ],
    },
]);
