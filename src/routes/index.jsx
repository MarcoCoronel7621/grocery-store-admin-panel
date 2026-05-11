import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../modules/login";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />
    }
])

export default router