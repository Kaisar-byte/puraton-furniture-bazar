import React from 'react'

const Product = ({ product }) => {
    const { image, name, location, resalePrice, originalPrice, yrsOfUsed, postedTime, sellersName, category, productType, sellerStatus } = product
    return (
        <div className='bg-[##F2F2F2] hover:rotate-3 hover:transition-all hover:ease-in-out'>
            <img src={image} alt="" />
            <div className='text-center  py-4'>
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


