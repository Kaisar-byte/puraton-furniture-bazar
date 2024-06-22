import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const useUser = () => {
    const { user, loading } = useContext(AuthContext)
    const { data: loggedUser = [], isPending, isLoading: loggedUserLoading, refetch: loggedUserRefetch } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading,
        // queryFn: () => fetch(`https://puraton-furniture-bazar-server-f1g1fhye5-kaisarbytes-projects.vercel.app/users/${user?.email}`, { credentials: "include" })
        //     .then(res => res.json())
        //     .then(data => data)
        queryFn: async () => {
            const { data } = await axios.get(`https://puraton-furniture-bazar-server-f1g1fhye5-kaisarbytes-projects.vercel.app/users/${user?.email}`, { withCredentials: true })
            return data
        }
    })

    return [loggedUser, loggedUserLoading, loggedUserRefetch, isPending]
}




export default useUser