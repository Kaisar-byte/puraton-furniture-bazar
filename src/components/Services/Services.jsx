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
            <div>
                <h2 className="text-4xl uppercase text-center font-semibold mt-10 py-6">Our services</h2>
                <p className="text-xl text-center">We are providing various services. Currently this three services are available now</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
                {
                    services.map((service, i) => (<div className="flex flex-col justify-center items-center  px-10 space-y-2 py-10 rounded-md" key={i}>

                        <span className="text-2xl md:text-5xl  rounded-full ">{service.icon}</span>
                        <h2 className="text-lg md:text-xl font-semibold">{service.label}</h2>
                        <p className="text-sm md:text-lg">{service.label2}</p>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Services
