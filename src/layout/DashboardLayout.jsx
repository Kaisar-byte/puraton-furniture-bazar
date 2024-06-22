

import { Link, NavLink, Outlet, } from 'react-router-dom'
import useUser from '../hooks/useUser'
import { CgProfile } from 'react-icons/cg'

const DashboardLayout = () => {
    const [loggedUser, loggedUserLoading,] = useUser()
    if (loggedUserLoading) {
        return <div>loading...</div>
    }

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#400AA7] px-4">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <nav className="menu p-4 w-80 min-h-full text-base-content">
                    <div className='p-4 rounded-md flex justify-center items-center gap-6'>
                        <div>
                            {
                                loggedUser?.photoURL ? <img src={loggedUser?.photo} /> : <CgProfile className='text-7xl text-white' />
                            }
                        </div>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-2xl text-white font-bold '>{loggedUser ? loggedUser?.userName : "No Name Found"}</h2>
                        <p className='text-white text-lg'> {loggedUser?.clientType}</p>
                    </div>
                    {
                        (loggedUser?.clientType === "seller") &&
                        <nav className='flex flex-col gap-2 space-y-2 py-20'>
                            <NavLink className="text-lg text-[#936BE2] border hover:bg-[#736BE2] hover:border-white hover:text-white text-center rounded-md border-[#936BE2]  py-2 font-semibold pl-6" to="/dashboard/seller/addproduct">Add Products</NavLink>
                            <NavLink className="text-lg text-[#936BE2] border hover:bg-[#736BE2] hover:border-white hover:text-white text-center rounded-md border-[#936BE2]  py-2 font-semibold pl-6" to="/dashboard/seller/myproducts">My Products</NavLink>
                        </nav>
                    }
                    {
                        (loggedUser?.clientType === "buyer") &&
                        <nav className='flex flex-col gap-4 py-10'>
                            <NavLink className="text-lg text-[#936BE2] border hover:bg-[#736BE2] hover:border-white hover:text-white text-center rounded-md border-[#936BE2]  py-2 font-semibold pl-6" to="/dashboard/buyer/myorders">My Orders</NavLink>
                        </nav>
                    }
                    {
                        (loggedUser?.clientType === "admin") &&
                        <nav className='flex flex-col gap-4 py-10'>
                            <NavLink className="text-lg text-[#936BE2] border hover:bg-[#736BE2] hover:border-white hover:text-white text-center rounded-md border-[#936BE2]  py-2 font-semibold pl-6" to="/dashboard/allbuyers">All Buyer</NavLink>
                            <NavLink className="text-lg text-[#936BE2] border hover:bg-[#736BE2] hover:border-white hover:text-white text-center rounded-md border-[#936BE2]  py-2 font-semibold pl-6" to="/dashboard/allsellers">All Sellers</NavLink>
                        </nav>
                    }

                    <Link to="/" className="text-lg text-[#936BE2] border hover:bg-[#736BE2] hover:border-white hover:text-white text-center rounded-md border-[#936BE2]  py-2 font-semibold pl-6">Home</Link>
                </nav>

            </div>
        </div>
    )
}

export default DashboardLayout