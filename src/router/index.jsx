import { createBrowserRouter } from "react-router-dom";

import User from "../layout/User";
import Admin from "../layout/Admin";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";

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
