import { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useUser from "../../hooks/useUser";
const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const [loggedUser] = useUser();

    console.log({ loggedUser })
    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(() => { })
    }
    return (

        <div className="px-10 bg-gray-500/25 z-50  gap-4">
            <div className="md:hidden py-2" onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ? <FaXmark /> : <GiHamburgerMenu />
                }
            </div>
            <div className={`flex flex-col md:flex-row md:justify-between  items-start md:items-center duration-75 md:p-0 `}>
                <Link to="/"><LuSofa className="text-2xl text-orange-500" /></Link>
                <nav className={`flex flex-col md:flex-row p-2 z-[100] -ml-2 mt-2 absolute md:static  x-40 ${isOpen ? "top-10" : "-top-60"}`}>
                    <NavLink className="mr-6">Home</NavLink>
                    <NavLink className="mr-6">About</NavLink>
                    <NavLink className="mr-6">Contact</NavLink>
                    <NavLink className="mr-6" to="/blogs">Blogs</NavLink>
                    {
                        (loggedUser.clientType === "Buyer") && <NavLink className="mr-6 rounded-sm"
                            to="/dashboard/buyer">Dashboard</NavLink>
                    }
                    {
                        (loggedUser.clientType === "Seller") && <NavLink className="mr-6 rounded-sm"
                            to="/dashboard/seller">Dashboard</NavLink>
                    }
                    {
                        (loggedUser.clientType === "Admin") && <NavLink className="mr-6 rounded-sm"
                            to="/dashboard/admin">Dashboard</NavLink>
                    }
                    {
                        (user) ? 
                        <>
                            <p className="mr-4 bg-gray-300 px-3 rounded-sm">{user.email}</p>
                            <NavLink className="mr-6 bg-blue-300 px-3 rounded-sm"
                                onClick={handleLogOut}
                            >Logout</NavLink>
                        </>
                            :
                                <NavLink className="mr-6" to="/login">Login</NavLink>

                    }
                </nav>
            </div>
        </div>


    )
}

export default Navbar
