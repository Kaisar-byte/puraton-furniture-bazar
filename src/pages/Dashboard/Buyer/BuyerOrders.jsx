import { useQuery } from '@tanstack/react-query'
import axios from 'axios'


const BuyerOrders = () => {

  const { data: myorders, isFetching } = useQuery({
    queryKey: ['myorders'],
    queryFn: () => axios
      .get("http://localhost:5000/orders")
      .then(res => res.data)
  })
  return (
    <div className='bg-orange-200/50 p-6 rounded-lg'>
      <div className="overflow-x-auto">
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
            {/* row 1 */}
            {
              myorders?.map((order, i) => <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="">
                      <div className="rounded-sm  w-16 h-18">
                        <img src={order.productImgURL} alt="Avatar Tailwind CSS Component" />
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
                <td>TK {order.productPrice}</td>
                <th>
                  <p>{order.productCondition}</p>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BuyerOrders