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
import SellerDashboard from "../pages/Dashboard/Seller/SellerDashboard";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import BuyerOrders from "../pages/Dashboard/Buyer/BuyerOrders";
import BuyerDashboard from "../pages/Dashboard/Buyer/BuyerDashboard";
import SellerProducts from "../pages/Dashboard/Seller/SellerProducts";
import AllSeller from "../pages/Dashboard/Admin/AllSeller";
import AllBuyer from "../pages/Dashboard/Admin/AllBuyer";



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
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.subCategory}`, { credentials: "include" }),
                element: <PrivateRoute>
                    <SubCategories />
                </PrivateRoute>
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
        element: <PrivateRoute>
            <DashboardLayout />
        </PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />

            },
            {
                path: "/dashboard/seller",
                element: <SellerDashboard />
            },
            {
                path: "/dashboard/seller/addproduct",
                element: <AddProduct />
            },
            {
                path: "/dashboard/seller/myproducts",
                element: <SellerProducts />
            },
            {
                path: "/dashboard/buyer",
                element: <BuyerDashboard />
            },
            {
                path: "/dashboard/buyer/myorders",
                element: <BuyerOrders />
            },
            {
                path: "/dashboard/admin",
                element: <AdminDashboard />
            },
            {
                path: "/dashboard/allsellers",
                element: <AllSeller />
            },
            {
                path: "/dashboard/allbuyers",
                element: <AllBuyer />
            },

        ]
    }

])

export default router;