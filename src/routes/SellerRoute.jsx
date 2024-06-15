import React from 'react'
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useUser from '../hooks/useUser'

const SellerRoute = ({ children }) => {
  const [loggedUser, loggedUserLoading] = useUser()
  if (loggedUserLoading) {
    return <div>loading</div>
  }
  if (loggedUser.clientType === "Seller") {
    return children
  }
  else {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Access Denied !!",
      text: `${loggedUser?.name}, you are not a "Seller"`,
      showConfirmButton: false,
      timer: 1500,
    });
  }



  return <Navigate to="/" replace />
}

export default SellerRoute