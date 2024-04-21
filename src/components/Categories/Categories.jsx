

import { FaKitchenSet } from "react-icons/fa6";
import { ImDrawer, ImOffice } from "react-icons/im";
import { LiaBedSolid } from "react-icons/lia";

import { MdOutlineTableRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";


const Categories = () => {
    const categories = [
        {
            name: "Bedroom", icon: <LiaBedSolid />
        },
        {
            name: "Drawing", icon: <ImDrawer />

        },
        {
            name: "Kitchen", icon: <FaKitchenSet />
        },
        {
            name: "Office", icon: <ImOffice />
        },
        {
            name: "Reading", icon: <MdOutlineTableRestaurant />

        },
    ]
    return (
        <div className="mx-10">
            <div className="flex flex-wrap justify-center items-center gap-6">
                {
                    categories.map((category, i) => (<Link key={i} to="/Categories/:id"> <div className='py-10'>
                        <div className='w-[200px] h-[200px] p-6 rounded-full hover:border-2 hover:border-dotted hover:rotate-360 hover:transition-all hover:border-red-500 hover:text-white hover:rounded-full hover:animate-pulse hover:duration-300 hover:ease-in '>

                            <div className='flex flex-col justify-center items-center  bg-gray-300 rounded-full p-10 hover:bg-blue-500'>
                                <span className='text-5xl hover:text-blue-400'>{category.icon}</span>
                                <p className='text-xl text-center text-gray-800'>{category.name}</p>
                            </div>
                        </div>
                    </div></Link>))
                }
            </div>
        </div>
    )
}

export default Categories
