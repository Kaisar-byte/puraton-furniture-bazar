import React from 'react'
// import errorImg from "../../assets/images/404.jpeg"
import errorImg from "../../assets/images/error.jpg"

const ErrorPage = () => {
    return (
        <div>
            <h2 className='text-8xl py-10 text-center text-red-500 font-bold'>Page not Found</h2>
            <div className='flex justify-center items-center'>
                <img className='w-[600px] h-[500px]' src={errorImg} alt="" />
            </div>
            <p className='text-9xl text-center font-bold text-yellow-600'>4 0 4</p>
        </div>
    )
}

export default ErrorPage