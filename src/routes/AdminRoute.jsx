
import { Navigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import useUser from '../hooks/useUser'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import Loading from '../components/Loading/Loading'

const AdminRoute = ({ children }) => {
  const { loading } = useContext(AuthContext)
  const [loggedUser, loggedUserLoading] = useUser()
  if (loading && loggedUserLoading) {
    return <Loading />
  }
  if (loggedUser.clientType === "admin") {
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

export default AdminRoute