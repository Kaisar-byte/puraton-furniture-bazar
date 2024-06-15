import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const useUser = () => {
    const { user } = useContext(AuthContext)
    const { data: loggedUser = [], isLoading: loggedUserLoading, refetch: loggedUserRefetch } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: () => fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => data)
    })
    return [loggedUser, loggedUserLoading, loggedUserRefetch]
}

export default useUser