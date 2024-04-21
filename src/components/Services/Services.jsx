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
        <div className="py-10 shadow-sm">
            <div className="flex justify-center items-center gap-10">
                {
                    services.map((service, i) => (<div className="flex flex-col justify-center items-center  px-16 space-y-2 py-10 rounded-md" key={i}>

                        <span className="text-5xl  rounded-full ">{service.icon}</span>
                        <h2 className="text-2xl font-semibold">{service.label}</h2>
                        <p className="text-lg">{service.label2}</p>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Services
