import { useContext } from 'react'

import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider'

const SellerProducts = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
  return (
    <div>SellerProducts</div>
  )
}

export default SellerProducts