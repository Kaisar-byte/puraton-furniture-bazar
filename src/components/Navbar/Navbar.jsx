import { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);


    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(() => { })
    }
    return (

        <div className="px-10 ">
            <div className="md:hidden pt-4" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <FaXmark /> : <GiHamburgerMenu />
                }
            </div>
            <div className={`flex flex-col md:flex-row justify-start md:justify-between  items-start md:items-center duration-75 py-4  md:p-0 `}>
                <LuSofa className="text-2xl text-orange-500" />
                <nav className={`flex flex-col md:flex-row py-4 absolute md:static  x-40 ${isOpen ? "top-12" : "-top-60"}`}>
                    <NavLink className="mr-6">Home</NavLink>
                    <NavLink className="mr-6">About</NavLink>
                    <NavLink className="mr-6">Contact</NavLink>
                    <NavLink className="mr-6" to="/blogs">Blogs</NavLink>
                    <NavLink className="mr-6" to="/addproduct">Add a Product</NavLink>
                    <NavLink className="mr-6" to="/myproduct">My Product</NavLink>
                    <NavLink className="mr-6" to="/myorders">My Orders</NavLink>
                    {
                        user?.uid ? <>
                            <NavLink className="mr-6 rounded-sm"
                                to="/dahboard">Dashboard</NavLink>
                            <p className="mr-4 bg-gray-300 px-3 rounded-sm">{user.email}</p>
                            <NavLink className="mr-6 bg-blue-300 px-3 rounded-sm"
                                onClick={handleLogOut}
                            >Logout</NavLink>

                        </>
                            :
                            <>
                                <NavLink className="mr-6" to="/login">Login</NavLink>
                            </>
                    }
                </nav>
            </div>
        </div>


    )
}

export default Navbar
