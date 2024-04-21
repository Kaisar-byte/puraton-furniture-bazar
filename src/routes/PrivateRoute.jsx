import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../components/Loading/Loading'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    } return children


}


export default PrivateRoute

