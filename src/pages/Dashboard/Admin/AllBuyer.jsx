import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import Loading from "../../../components/Loading/Loading";

const AllBuyer = () => {
    const [data, setData] = useState([])
    const { loading } = useContext(AuthContext)
    useEffect(() => {
        axios.get(`http://localhost:5000/users`, { withCredentials: true })
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
                                1
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
        </div>
    );
}

export default AllBuyer;
