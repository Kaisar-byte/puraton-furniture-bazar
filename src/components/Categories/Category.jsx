import React from 'react'

const Category = ({ category }) => {
    const { name, icon } = category
    return (
        <div className='py-10'>
            <div className='w-[200px] h-[200px] p-6 rounded-full hover:border-2 hover:border-dotted hover:rotate-360 hover:transition-all hover:border-red-500 hover:text-white hover:rounded-full hover:animate-bounce hover:duration-300 hover:ease-in '>

                <div className='flex flex-col justify-center items-center  bg-gray-300 rounded-full p-10 hover:bg-blue-500'>
                    <span className='text-5xl hover:text-blue-400'>{icon}</span>
                    <p className='text-xl text-center text-gray-800'>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default Category
