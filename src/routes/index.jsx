import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../modules/login";

const router = createBrowserRouter([
    {
        index: true,
        element: <Navigate to={"/login"} replace/>
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default router