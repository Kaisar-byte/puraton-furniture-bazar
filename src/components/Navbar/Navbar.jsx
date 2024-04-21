import { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuSofa } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const menus = [
        { title: "Home", link: "/" },
        { title: "Shop", link: "/shop" },
        { title: "Blog", link: "/blog" },
        { title: "About", link: "/about" },
        { title: "Contact", link: "/contact" },
    ]

    const handleLogOut = () => {
        LogOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className={`shadow-md w-full py-2 top-0 md:px-10 lg:px-12 `}>
            <div className="flex  flex-col md:flex-row lg:flex-row justify-center md:justify-between items-start md:items-center px-0 md:px-8  py-2">

                {/* logo for website */}
                <Link to="/" className="flex justify-center items-center gap-2 pl-4 md:pl-0">
                    <LuSofa className="w-7 h-7 text-blue-600 " />
                    <h2 className="font-bold invisible md:visible">PFB</h2>
                </Link>
                {/* Menu Icon */}
                <div className="absolute right-8 top-4 visible md:invisible lg:invisible" onClick={() => setIsOpen(!isOpen)}>
                    {
                        isOpen ? <FaXmark /> : <GiHamburgerMenu />
                    }
                </div>
                {/* website menu list */}
                <ul className={`flex flex-col md:flex-row lg:flex-row justify-end items-start md:items-center gap-4 absolute md:static bg-white transition-all ease-in  md:z-auto w-full ml-0 ${isOpen ? "top-12" : "top-[-440px]"}`}>
                    {
                        menus.map((menu, i) => <NavLink className="px-4" key={i} to={menu.link}>{menu.title}</NavLink>)
                    }
                    {
                        user?.uid ?

                            <>
                                <span className="text-red-400">{user?.email}</span>
                                <div className="flex justify-center items-center">
                                    <Link className="bg-sky-600 py-1 px-3 ml-3 mb-6 md:mb-0 rounded-md text-white" onClick={handleLogOut}>Log Out</Link>
                                </div>
                            </>
                            :
                            <>
                                <div className="flex justify-center items-center">
                                    <Link className="bg-sky-600 py-1 px-3 ml-3 mb-6 md:mb-0 rounded-md text-white hover:bg-sky-500 hover:text-black" to="/login">Login</Link>
                                </div>
                            </>
                    }

                </ul>

            </div>
        </div>

    )
}

export default Navbar
