import  { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const useUser = () => {
    const { user } = useContext(AuthContext)
    const { data: loggedUser = [], isLoading: loggedUserLoading, refetch:loggedUserRefetch } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: () => fetch(`https://puraton-furniture-bazar-server-git-main-kaisarbytes-projects.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => data)
    })
    return [loggedUser, loggedUserLoading, loggedUserRefetch]
}

export default useUser