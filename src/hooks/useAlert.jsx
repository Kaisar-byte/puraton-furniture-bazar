
import { useEffect } from 'react'
import Swal from 'sweetalert2'

const useAlert = () => {

    const showAlert = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `product updated successfully`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    useEffect(() => {
        console.log(showAlert);
        showAlert()
    }, [])

    return [showAlert]
}




export default useAlert