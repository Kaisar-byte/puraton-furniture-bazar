import React from 'react'

const Product = ({ product }) => {
    const { image, name, location, resalePrice, originalPrice, yrsOfUsed, postedTime, sellersName, category, productType, sellerStatus } = product
    return (
        <div className='bg-[##F2F2F2] hover:rotate-3 hover:transition-all hover:ease-in-out flex flex-col justify-center items-center'>
            <img src={image} className='w-[50%] md:w-full' alt="" />
            <div className='text-center  py-2'>
                <h2 className='text-lg'>{name}</h2>
                <div className='flex justify-center'>
                    <span className='line-through text-gray-400 pr-4'>{originalPrice}</span>
                    <span>{resalePrice}</span>
                </div>
            </div>
        </div>
    )
}

export default Product


