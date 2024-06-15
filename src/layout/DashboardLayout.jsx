
import { useContext } from 'react'
import { Link, NavLink, Outlet, } from 'react-router-dom'
import useUser from '../hooks/useUser'

const DashboardLayout = () => {
    const [loggedUser] = useUser()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-blue-800/60">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <nav className="menu p-4 w-80 min-h-full text-base-content">
                    <div className='bg-sky-400 p-4 rounded-md flex justify-center items-center gap-6'>
                        <div className="avatar ">
                            <div className="w-32 rounded-full">
                                <img src={loggedUser?.photoURL} />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-md text-white font-semibold'>{loggedUser?.userName}</h2>
                            <p className='text-white'>Client Status: {loggedUser?.clientType}</p>
                        </div>
                    </div>
                    {
                        (loggedUser.clientType === "Seller") &&
                        <nav className='flex flex-col gap-4 py-10'>
                            <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/addproduct">Add Products</NavLink>
                            <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/addproduct">My Products</NavLink>
                        </nav>
                    }
                    {
                        (loggedUser.clientType === "Buyer") &&
                        <nav className='flex flex-col gap-4 py-10'>

                            <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/myorders">My Orders</NavLink>
                        </nav>
                    }
                    {
                        (loggedUser.clientType === "Admin") &&
                        <nav className='flex flex-col gap-4 py-10'>
                            <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/allbuyers">All Buyer</NavLink>
                            <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/allsellers">All Sellers</NavLink>
                        </nav>
                    }


                    <Link to="/" className="border py-5 text-center text-lg text-white">Home</Link>
                </nav>

            </div>
        </div>
    )
}

export default DashboardLayout