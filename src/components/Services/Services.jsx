import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdDiscount } from "react-icons/md";

const Services = () => {
    const services = [
        {
            label: "Free Shipping",
            label2: "Free shipping on all order",
            icon: <LiaShippingFastSolid />
        },
        {
            label: "Money Return",
            label2: "Back under 05 days",
            icon: <FaRegMoneyBillAlt />
        },
        {
            label: "Money Discount",
            label2: "on every 05 order",
            icon: <MdDiscount />
        },
    ]
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center py-10">We are serving for</h2>
            <div className="flex justify-center items-center gap-10">
                {
                    services.map((service, i) => (<div className="flex flex-col justify-center items-center bg-[#E7E7E7E7] px-16 space-y-2 py-10 rounded-md" key={i}>

                        <span className="text-4xl bg-slate-400 p-6 rounded-full text-white border">{service.icon}</span>
                        <h2 className="text-2xl font-semibold">{service.label}</h2>
                        <p className="text-lg">{service.label2}</p>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Services
