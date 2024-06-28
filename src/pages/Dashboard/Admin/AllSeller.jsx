import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const AllSeller = () => {
    const [data, setData] = useState([])
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://puraton-furniture-bazar-server.vercel.app/users`, { withCredentials: true })
            .then(res => {
                setData(res.data);
            })
    }, [])

    const allSeller = data.filter(onlySeller => onlySeller.clientType === "seller")


    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="w-[80%] ">
                {
                    allSeller?.length === 0 ?
                        <>
                            <>
                                <div className="w-[400px]">
                                    <h2 className="bg-blue-500 text-xl font-semibold text-center text-white p-10 rounded-lg">No data found for Sellers</h2>
                                </div>
                            </>
                        </> :

                        <div className='flex flex-col justify-center items-center gap-10 '>
                            <div className='w-fit font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent '>
                                <p className="uppercase text-3xl ">
                                    List of all Sellers
                                </p>
                            </div>
                            <table className='table success bordered '>
                                <thead>
                                    <tr>
                                        <th>
                                            <p className='text-center'>
                                                Serial
                                            </p>
                                        </th>
                                        <th>
                                            <p className='text-center'>
                                                User name
                                            </p>
                                        </th>
                                        <th>
                                            <p className='text-center'>
                                                Email
                                            </p>
                                        </th>
                                        <th>
                                            <p className='text-center'>
                                                Client Type
                                            </p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allSeller?.map((sellerData, i) =>
                                        <tr key={i} className='px-4'>
                                            <th>
                                                <p className='font-normal text-center'> {i + 1}</p>
                                            </th>
                                            <td>
                                                {sellerData?.userName}
                                            </td>
                                            <td>
                                                {sellerData?.email}
                                            </td>
                                            <td>
                                                {sellerData?.clientType}
                                            </td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        </div>
    );
}

export default AllSeller;
