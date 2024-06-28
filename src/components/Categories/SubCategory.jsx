import { Link } from "react-router-dom"
import { IoMan } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import BookNowModal from "../BookNowModal/BookNowModal";
import { useState } from "react";
import useUser from "../../hooks/useUser";

const SubCategory = ({ category }) => {
    const [loggedUser] = useUser()
    const [showModal, setShowModal] = useState(false)

    const { productName, productPrice, sellerContactNumber, sellerLocation, sellerName, productCategory, productCondition, productBuyingPrice, productDescription, productImgURL, postingTime, totalUsed } = category
    return (
        <div className='overflow-hidden rounded-lg has-shadow w-82 h-[450px]'>
            <div className="">
                <h3 className='text-xl font-semibold bg-sky-800/25 text-center py-1'>
                    {productName}
                </h3>
                <img src={productImgURL}
                    className='aspect-video rounded-none border-b mb-2 w-full h-44'
                    alt='' />
            </div>
            <div className='text-xs text-right py-1 pr-4'>
                Posted On :  {postingTime ? postingTime : "No date found"}

            </div>
            <div className="px-2">
                <div className="flex gap-2 justify-start items-center">
                    <h4 className="font-bold text-xl ">TK {productPrice}</h4>
                    <h4 className="text-xs line-through">({productBuyingPrice})</h4>
                </div>
                <div className='flex flex-col gap-2'>

                    <div className='text-sm'>
                        <h2>Sellers:</h2>
                        <div className="flex gap-2 justify-start items-center">
                            <span><IoMan /></span>
                            <p className="text-sm">{sellerName ? sellerName : "Unnamed"}</p>
                        </div>
                        <div className="flex gap-2 justify-start items-center">
                            <span><IoCallOutline /></span>
                            <p>{sellerContactNumber}</p>
                        </div>
                    </div>
                    <div className='flex '>
                        <span className='badge light info  text-sm'>
                            {totalUsed} used
                        </span>
                        <span className='badge light primary  text-sm'>
                            {productCondition}
                        </span>
                        <span className='badge light warn text-sm'>
                            {sellerLocation}
                        </span>
                    </div>
                    {
                        loggedUser?.clientType === "buyer" ? <button className="btn btn-success w-full mt-4 " onClick={() => setShowModal(true)}>Book Now</button> : <button className='btn solid success w-full mt-4 uppercase'>
                            Only Buyer Can Place Order
                        </button>


                    }
                    <BookNowModal category={category} isVisible={loggedUser?.clientType === "buyer" && showModal} onClose={() => setShowModal(false)} />

                </div>
            </div>


        </div >
    )
}

export default SubCategory