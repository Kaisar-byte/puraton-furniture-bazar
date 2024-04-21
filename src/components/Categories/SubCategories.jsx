import SubCategory from "./SubCategory"

const SubCategories = () => {
    const subcategories = [
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
        {
            imgPath: "https://aamarmarket.com/wp-content/uploads/classified-listing/2023/11/received_168224959334849.jpeg",
            productName: "Shegun Kat",
            location: "Chattogram, Bangladesh",
            originalPrice: "90,000",
            resalePrice: "50,000",
            yrsOfUsed: "05 yrs",
            sellerName: "Md Habibur Rahman",
            postedOn: "31 Dec 2023"
        },
    ]
    return (
        <div className="mx-20">
            <h2 className="text-2xl text-center py-6 uppercase font-bold">Bed room furniture on sale</h2>
            <div className="grid grid-cols-3 gap-10">
                {
                    subcategories.map((category, i) => <SubCategory key={i} category={category} />)
                }
            </div>
        </div>
    )
}

export default SubCategories
