import { useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider"
import { TiTick } from "react-icons/ti";



const SubCategory = ({ category }) => {
    const [showModal, setShowModal] = useState(false)
    const { user } = useContext(AuthContext)
    const { imgPath, productName, location, originalPrice, resalePrice, yrsOfUsed, sellerName, postedOn } = category
    return (
        <div className="">
            <img src={imgPath} className="" alt="" />
            <div className="flex justify-between py-4">
                <h2 className="text-xl font-semibold">{productName}</h2>
                <div className="flex gap-1">
                    <h3>{resalePrice}</h3>
                    <h3 className="line-through text-sm">({originalPrice})</h3>
                </div>
            </div>
            <p>{yrsOfUsed} used</p>
            <div className="flex gap-4">
                <h4>{sellerName}</h4>
                <p className="bg-blue-400 px-2 py-1 text-xs rounded-full text-white">X</p>
            </div>
            <div className="flex justify-end pr-4">
                <button type="btn" className="py-1 px-3 bg-sky-500 text-white rounded-lg" onClick={() => {
                    setShowModal(true)

                }}>Book Now</button>
            </div>
            {
                showModal ? <>
                    <div
                        className="flex justify-center items-center  fixed inset-0 z-50 "
                    >
                        <div className="relative border border-gray-50  rounded-lg w-[40%] md:w-[30%] lg:w-[25%]">
                            {/*content*/}
                            <div className="rounded-lg shadow-lg relative flex justify-center items-center flex-col w-full h-[80%] bg-white">
                                {/*header*/}
                                <div>
                                    <img src={imgPath} className="w-full h-[30%]   " alt="" />
                                    <div className="flex  justify-between items-center py-3">
                                        <h2 className="text-center text-sm md:text-xl lg:text-xl text-green-500 read-only">{productName}</h2>
                                        <p className="text-xs md:text-lg lg:text-xl text-blue-500">{resalePrice}</p>
                                    </div>
                                    <div>
                                        <div className="flex justify-start items-center gap-2">
                                            <h2 className="text-lg text-blue-400">user name</h2>
                                            <span><TiTick className="text-white bg-blue-500 rounded-full" />
                                            </span>
                                        </div>
                                        <h3 className="text-sm">{user.email}</h3>
                                        <h4 className="text-sm">018411001100</h4>
                                        <h3 className="text-md text-orange-400">Savar, Dhaka</h3>
                                    </div>


                                </div>
                                {/*body*/}

                                {/*footer*/}
                                <div>
                                    <input type="button" className="py-1 my-6 rounded-sm  text-white w-[60px] bg-gray-400" value="Submit" onClick={() => setShowModal(false)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </> : null
            }



        </div >
    )
}

export default SubCategory
