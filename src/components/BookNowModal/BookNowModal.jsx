import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider'
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import { PiMapPinLineFill } from 'react-icons/pi';
// import Swal from 'sweetalert2';
import useUser from '../../hooks/useUser';
import axios from 'axios';
import Loading from '../Loading/Loading';
import Swal from 'sweetalert2';

const BookNowModal = ({ isVisible, onClose, category }) => {
    const { user, loading } = useContext(AuthContext)
    const [loggedUser, loggedUserLoading] = useUser()
    console.log(loggedUser);
    const { productName, productPrice, sellerContactNumber, sellerLocation, productCategory, productCondition, productDescription, productImgURL, sellerName } = category
    if (!isVisible) return null

    if (loading && loggedUserLoading) {
        return <Loading />
    }
    const handleOrder = (e) => {
        e.preventDefault()
        const bookedProduct = {
            productName, productPrice, productCategory, productCondition, productDescription, productImgURL, email: user?.email, clientType: loggedUser?.clientType
        }
        console.log(bookedProduct)

        if (loggedUser?.clientType === "buyer") {
            axios.post(`http://localhost:5000/order`, bookedProduct, { withCredentials: true })
                .then(res => {
                    console.log(res.data);
                    if (res.data.acknowledged) {
                        Swal.fire({
                            title: `Thank you, ${loggedUser.userName.split("@")[0]}`,
                            text: "Your order has been placed",
                            icon: "success"
                        });
                    }
                })
        } else {
            Swal.fire("You are not a buyer so cann't place a order")
        }
        // fetch("http://localhost:5000/order", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify(bookedProduct)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.acknowledged) {
        //             // Swal.fire("Your ordered has been confirmed")
        //             console.log("Your ordered has been confirmed");
        //         }
        //     })
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center ' onClick={() => onClose()}>
            <div className='flex flex-col '>
                <button className='text-white text-xl place-self-end ' onClick={() => onClose()}>x</button>
                <div className='overflow-hidden bg-white rounded-lg has-shadow w-96 p-4 flex flex-col gap-2 '>
                    <h3 className='text-xl bg-sky-500/35 py-4 rounded-sm text-center font-bold leading-3'>
                        {productName}
                    </h3>
                    <div className='flex gap-4 justify-between items-center'>
                        <div className='flex flex-col'>
                            <img src={productImgURL} className='w-40 h-32' alt="" />
                            <div className='text-center mt-4 bg-slate-500'>
                                <h2 className='font-semibold text-md text-white'>TK {productPrice}</h2>
                            </div>

                        </div>
                        <div className='space-y-2 py-4'>
                            <h2>Sellers Details:</h2>
                            <div className='flex justify-start items-center gap-1'>
                                <span><FaUser className='text-sm text-gray-600' /></span>
                                <h3 className='text-sm'>{sellerName ? sellerName : "No Name"}</h3>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <span><MdEmail className='text-sm text-gray-600' /></span>
                                <h3 className='text-sm'>{user?.uid ? user.email : "no user found"}</h3>
                            </div>
                            <div className='flex justify-start items-center gap-1 text-sm'>
                                <span><FaPhoneAlt className='text-sm text-gray-600' /></span>
                                <p className='text-sm'>{sellerContactNumber}</p>
                            </div>
                            <div className='flex justify-start items-center gap-1'>
                                <span><PiMapPinLineFill className='text-sm text-gray-600' /></span>
                                <p className='text-sm'>{sellerLocation}</p>
                            </div>


                        </div>
                    </div>
                    {
                        loggedUser?.clientType === "buyer" &&
                        <input type='submit' className='btn solid success w-full' onClick={handleOrder} value="Order Now" />
                    }

                </div>

            </div>
        </div>
    )
}

export default BookNowModal