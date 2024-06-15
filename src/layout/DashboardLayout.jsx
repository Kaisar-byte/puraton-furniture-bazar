
import { useContext } from 'react'
import { NavLink, Outlet, } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
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
            <div className="drawer-side bg-gray-400">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <nav className="menu p-4 w-80 min-h-full text-base-content">
                    <div className='bg-amber-400/75 p-4 rounded-md flex justify-center items-center gap-6'>
                        <div className="avatar ">
                            <div className="w-32 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl'>Default User</h2>
                            <p>Client Type {loggedUser.length}</p>
                        </div>
                    </div>
                    <nav className='flex flex-col gap-4 py-10'>
                        {


                            <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/addproduct">Add Products</NavLink>
                        }
                        <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6" to="/dashboard/addproduct">Add Products</NavLink>
                        <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6">My Products</NavLink>
                        <NavLink className="text-lg  border hover:bg-green-500/50 py-4 font-semibold pl-6">My Buyers</NavLink>
                    </nav>
                    <NavLink to="/" className="mr-6 py-10 text-center text-xl bg-blue-300 px-3 rounded-sm"

                    >Go To Home</NavLink>
                </nav>

            </div>
        </div>
    )
}

export default DashboardLayout