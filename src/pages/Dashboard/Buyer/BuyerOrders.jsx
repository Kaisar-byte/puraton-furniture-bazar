import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Loading from '../../../components/Loading/Loading'
import { useContext } from 'react'
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider'
import useUser from '../../../hooks/useUser'


const BuyerOrders = () => {
  const [loggedUser] = useUser()
  const { user, loading } = useContext(AuthContext)
  const userEmail = loggedUser?.email || user?.email


  const { data: orders, isLoading } = useQuery({
    queryKey: ['myOrders'],
    queryFn: async () => {
      const { data } = await axios.get(`https://puraton-furniture-bazar-server.vercel.app/order/${userEmail}`, { withCredentials: true })
      console.log(data);
      return data;
    }

  })
  if (loading && isLoading) {
    return <Loading />
  }

  return (
    <div className='bg-orange-200/50 p-6 rounded-lg my-6'>
      <div className="overflow-x-auto">
        {
          orders?.length === 0 ?
            <>
              <div className="w-[400px]">
                <h2 className="bg-blue-500 text-xl font-semibold text-center text-white p-10 rounded-lg">No order found for you</h2>
              </div>
            </>
            :
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                    </label>
                  </th>
                  <th>Product Image</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Product Condition</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  orders?.map((order, i) => <tr key={i}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="">
                          <div className="rounded-sm ">
                            <img src={order.productImgURL} className=' w-12 h-8' alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold"></div>
                          <div className="text-sm opacity-50"></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2>{order.productName}</h2>
                    </td>
                    <td>
                      <p className='text-right'>TK {order.productPrice}</p>
                    </td>
                    <th>
                      <p className='text-center'>{order.productCondition}</p>
                    </th>
                  </tr>)
                }
              </tbody>
            </table>
        }
      </div>
    </div>
  )
}

export default BuyerOrders