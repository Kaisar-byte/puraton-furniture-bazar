import { NavLink } from "react-router-dom"
import Product from "./Product"

const Products = () => {
    const products = [
        {
            image: "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Ffiles%2FNav1_LivingRoomFurniture.jpg%3Fv%3D1709032906&w=384&q=75",
            name: "Living Room Set",
            location: "Dhaka, Bangladesh",
            resalePrice: "1,20,000.00",
            originalPrice: "1,00,000.00",
            yrsOfUsed: "09 Months",
            postedTime: "12 Jan 23",
            sellersName: "Md Abdur Rahman",
            category: "Living",
            productType: "New Arrival",
            sellerStatus: "verified"
        },
        {
            image: "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F2_40d9c634-67d1-4623-a7d5-c2ef2b24db83.jpg%3Fv%3D1709108882&w=384&q=75",
            name: "Drawing Room Sofa",
            location: "Barishal, Bangladesh",
            resalePrice: "80,000.00",
            originalPrice: "1,20,000.00",
            yrsOfUsed: "02 Months",
            postedTime: "12 Feb 23",
            sellersName: "Md Hamidur  Rahman",
            category: "Drawing",
            productType: "onSale",
            sellerStatus: "verified"
        },
        {
            image: "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F4_d2d85450-694d-4907-8abe-699534972db6.jpg%3Fv%3D1709108892&w=384&q=75",
            name: "Reading Room Chair",
            location: "Khulna, Bangladesh",
            resalePrice: "40,000.00",
            originalPrice: "80,000.00",
            yrsOfUsed: "05 Months",
            postedTime: "8 Jun 23",
            sellersName: "Md Hamidur  Rahman",
            category: "Drawing",
            productType: "onSale",
            sellerStatus: "verified"
        },
        {
            image: "https://furns-react.netlify.app/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0864%2F0607%2F0562%2Fproducts%2F12_f87051c2-0726-4a74-a98b-5b462b19dc78.jpg%3Fv%3D1709108934&w=384&q=75",
            name: "Drawing Room Sofa",
            location: "Sylhet, Bangladesh",
            resalePrice: "80,000.00",
            originalPrice: "1,10,000.00",
            yrsOfUsed: "11 Months",
            postedTime: "19 Feb 23",
            sellersName: "Md Moklesur Rahman",
            category: "Drawing",
            productType: "Tending",
            sellerStatus: "verified"
        }

    ]


    return (
        <div className="mt-20">
            <div className="w-full md:w-[600px] mx-auto text-center space-y-7">
                <h2 className="text-xl md:text-4xl font-semibold">Our Products</h2>
                <p className="text-sm md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis similique placeat ipsam accusamus adipisci architecto veritatis laudantium voluptatum, sint tenetur sequi sed ipsa labore dicta provident vero. A, dolorum illum!</p>

            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mx-20 py-10 ">
                {
                    products.map((product, i) => <Product key={i} product={product} />)
                }
            </div>
        </div>
    )
}

export default Products
