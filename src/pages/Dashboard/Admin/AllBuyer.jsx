import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Loading from "../../../components/Loading/Loading";

const AllBuyer = () => {
    const [data, setData] = useState([])
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`https://puraton-furniture-bazar-server.vercel.app/users`, { withCredentials: true })
            .then(res => {
                setData(res.data);
            })
    }, [])
    const allBuyers = data.filter(onlyBuyer => onlyBuyer.clientType === "buyer")
    console.log(allBuyers);
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <div className="w-[80%] ">
                {
                    allBuyers.length === 0 ?
                        <>
                            <div className="w-[400px]">
                                <h2 className="bg-blue-500 text-xl font-semibold text-center text-white p-10 rounded-lg">No data found for Buyers</h2>
                            </div>
                        </>
                        :
                        <div className="flex  flex-col justify-center items-center gap-4">
                            <div className='w-fit font-bold from-[#6366F1] via-[#D946EF] to-[#FB7185] bg-gradient-to-r bg-clip-text text-transparent'>
                                <p className="uppercase text-3xl">
                                    List of all buyers
                                </p>
                            </div>
                            <table className='table success bordered'>
                                <thead>
                                    <tr>
                                        <th>
                                            Serial
                                        </th>
                                        <th>
                                            User name
                                        </th>
                                        <th>
                                            Email
                                        </th>
                                        <th>
                                            Client Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allBuyers?.map((buyerData, i) => <tr key={i}>
                                        <th>
                                            <p className="font-normal text-center">{i + 1}</p>
                                        </th>
                                        <td>
                                            {buyerData?.userName}
                                        </td>
                                        <td>
                                            {buyerData?.email}
                                        </td>
                                        <td>
                                            {buyerData?.clientType}
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

export default AllBuyer;
