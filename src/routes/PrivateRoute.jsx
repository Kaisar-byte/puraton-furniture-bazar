import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading/Loading'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loading />
    }
    if (user) {

        return children
    }

    return <Navigate to="/login" state={{ from: location }} replace />


}


export default PrivateRoute

