import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import SubCategories from "../components/Categories/SubCategories";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import AddProduct from "../components/AddProduct/AddProduct";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
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
            },
            {
                path: "/blogs",
                element: <Blogs />
            }

        ]
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
        path: "/addproduct",
        element: <AddProduct />
    }
])

export default router;