import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import SubCategories from "../components/Categories/SubCategories";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddProduct from "../pages/Dashboard/Seller/AddProduct";



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
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/categories/:subCategory",
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.subCategory}`),
                element: <SubCategories />
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
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />

            },
            {
                path: "/dashboard/seller",
                element: <Seller />
            },
            {
                path: "/dashboard/addproduct",
                element: <AddProduct />
            },

        ]
    }

])

export default router;