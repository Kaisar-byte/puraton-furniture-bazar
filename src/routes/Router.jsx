import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SubCategories from "../components/Categories/SubCategories";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/categories/:id",
                element: <PrivateRoute>
                    <SubCategories />
                </PrivateRoute>
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
])

export default router;