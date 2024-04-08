

import { FaKitchenSet } from "react-icons/fa6";
import { ImDrawer, ImOffice } from "react-icons/im";
import { LiaBedSolid } from "react-icons/lia";
import Category from "./Category";
import { MdOutlineTableRestaurant } from "react-icons/md";


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
                    categories.map((category, i) => (<Category key={i} category={category} />))
                }
            </div>
        </div>
    )
}

export default Categories
