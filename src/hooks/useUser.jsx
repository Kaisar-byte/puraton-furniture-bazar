import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useUser = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: loggedUser = [], isPending, isLoading: loggedUserLoading, refetch } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:5000/users/${user?.email}`, { withCredentials: true })
            return data
        }
    })

    return [loggedUser, loggedUserLoading, refetch, isPending]
}




export default useUser