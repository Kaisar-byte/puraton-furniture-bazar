import { useContext, useEffect } from 'react'

import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider'
import axios from 'axios'
import useUser from '../../../hooks/useUser'
import Loading from '../../../components/Loading/Loading'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const SellerProducts = () => {
  const [loggedUser] = useUser()
  const { user, loading } = useContext(AuthContext)
  const userEmail = loggedUser?.email || user.email



  const { data: sellerProducts, isPending, refetch, isLoading } = useQuery({
    queryKey: ['sellerProducts'],
    queryFn: async () => {
      const { data } = await axios.get(`https://puraton-furniture-bazar-server.vercel.app/products/${userEmail}`, { withCredentials: true })
      return data;
    }

  })

  if (loading && isLoading) {
    return <Loading />
  }


  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://puraton-furniture-bazar-server.vercel.app/products/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              )
                .then(() => {
                  refetch();
                });
            }
          })
          .catch(err => {
            Swal.fire(
              'Error!',
              'There was an error deleting your product.',
              err.message
            );
          });
      }
    });
  }




  return (
    <div>
      <div className="overflow-x-auto">
        {
          sellerProducts?.length === 0 ?
            <>
              <div className="w-[500px]">
                <h2 className="bg-yellow-800/80   text-2xl font-semibold text-center text-white p-4 rounded-full">Currently you do not added any product</h2>
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
                  sellerProducts?.map((sellerProduct, i) => <tr key={i}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="">
                          <div className="rounded-sm ">
                            <img src={sellerProduct.productImgURL} className=' w-12 h-8' alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold"></div>
                          <div className="text-sm opacity-50"></div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2>{sellerProduct.productName}</h2>
                    </td>
                    <td>
                      <p className='text-right'>TK {sellerProduct.productPrice}</p>
                    </td>
                    <th>
                      <p className='text-center'>{sellerProduct.productCondition}</p>
                    </th>
                    <th>
                      <Link className='text-sm font-semibold bg-sky-400 px-4 py-2 rounded-md text-white' onClick={() => handleDelete(sellerProduct._id)}>Delete</Link>
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

export default SellerProducts