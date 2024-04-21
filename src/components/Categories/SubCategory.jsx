import { useContext, useState } from "react"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider"



const SubCategory = ({ category }) => {
    const [showModal, setShowModal] = useState(false)
    const { user } = useContext(AuthContext)
    const { imgPath, productName, location, originalPrice, resalePrice, yrsOfUsed, sellerName, postedOn } = category
    return (
        <div>
            <img src={imgPath} alt="" />
            <div className="flex justify-between py-4">
                <h2 className="text-xl font-semibold">{productName}</h2>
                <div className="flex gap-1">
                    <h3>{resalePrice}</h3>
                    <h3 className="line-through text-sm">({originalPrice})</h3>
                </div>
            </div>
            <p className="">{yrsOfUsed} used</p>
            <div className="flex gap-4">
                <p>Seller:</p>
                <h4>{sellerName}</h4>
                <p className="bg-blue-400 px-2 py-1 text-xs rounded-full text-white">X</p>
            </div>
            <div className="flex justify-end pr-4">
                <button type="btn" className="py-1 px-3 bg-sky-500 text-white rounded-lg" onClick={() => {
                    setShowModal(true)
                    console.log("Kam no goorer")
                }}>Book Now</button>
            </div>
            {
                showModal ? <>
                    {
                        console.log("its not working")
                    }
                    <div
                        className="flex justify-center items-center  fixed inset-0 z-50  "
                    >
                        <div className="relative w-[40%] border-2 border-red-400 rounded-lg">
                            {/*content*/}
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                                {/*header*/}
                                <div className="p-4">
                                    <img src={imgPath} className="w-full h-[200px] rounded-lg" alt="" />
                                    <div className="flex justify-between items-center">
                                        <h2 className="text-center text-2xl text-green-500 read-only" >{productName}</h2>
                                        <span>{resalePrice}</span>
                                    </div>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {user.email}
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
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
