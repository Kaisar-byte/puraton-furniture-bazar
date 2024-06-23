import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useUser = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: loggedUser = [], isPending, isLoading: loggedUserLoading, refetch: loggedUserRefetch } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const { data } = await axios.get(`https://puraton-furniture-bazar-server.vercel.app/users/${user?.email}`, { withCredentials: true })
            return data
        }
    })

    return [loggedUser, loggedUserLoading, loggedUserRefetch, isPending]
}




export default useUser