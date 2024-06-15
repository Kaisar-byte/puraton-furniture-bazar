
import { FaKitchenSet } from "react-icons/fa6";
import { ImDrawer, ImOffice } from "react-icons/im";
import { LiaBedSolid } from "react-icons/lia";

import { MdOutlineTableRestaurant } from "react-icons/md";
import { Link } from "react-router-dom";



const Categories = () => {

    const furnitureByCategories = [
        {
            name: "Bedroom",
            icon: <LiaBedSolid />,
        },
        {
            name: "Drawing",
            icon: <ImDrawer />,
        },
        {
            name: "Kitchen",
            icon: <FaKitchenSet />,
        },
        {
            name: "Office",
            icon: <ImOffice />,
        },
        {
            name: "Reading",
            icon: <MdOutlineTableRestaurant />,
        },
    ]

    return (

        <div className="mx-10">
            <div className="flex flex-wrap justify-center items-center gap-6">
                {
                    furnitureByCategories.map((category, i) => (<Link key={i} to={`/categories/${category.name}`}>
                        <div className='py-10'>
                            <div className='w-[150px] h-[120px] rounded-xl p-2 hover:text-white'>

                                <div className='flex flex-col justify-center items-center bg-gray-300 p-10 hover:bg-blue-500'>
                                    <span className='text-3xl hover:text-blue-400'>{category.icon}</span>
                                    <p className='text-xl text-center hover:text-white text-gray-800'>{category.name}</p>
                                </div>
                            </div>
                        </div></Link>))
                }
            </div>
        </div>
    )
}

export default Categories
