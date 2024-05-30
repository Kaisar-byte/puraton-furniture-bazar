import Swal from "sweetalert2";


const AddProduct = () => {

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const sellerContactNumber = form.sellerContactNumber.value;
    const sellerLocation = form.sellerLocation.value;
    const productCategory = form.productCategory.value;
    const productCondition = form.productCondition.value;
    const productBuyingPrice = form.productBuyingPrice.value;
    const productDescription = form.productDescription.value;
    const productImgURL = form.productImgURL.value

    const newProduct = {
      productName, productPrice, sellerContactNumber, sellerLocation, productCategory, productCondition, productBuyingPrice, productDescription, productImgURL
    }

    fetch("http://localhost:5000/addproduct", {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire("New furniture added successfully");
        }
      })

  }
  return (
    <div className="flex my-20 justify-center items-center ">
      <div className=" w-full md:w-[40%] mx-20 md:mx-auto bg-orange-100 border border-red-300/40 rounded-md">
        <h2 className="text-2xl py-4 font-bold text-white bg-gray-400 text-center rounded-t-md">Add A Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-0 md:space-y-2 py-1 md:py-4 px-10 ">
            <label htmlFor="productName" className="text-sm md:text-xl ">Product Name</label>
            <input type="text" name="productName" placeholder="Enter name of your product" className=" border py-2 w-full pl-3" />
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start px-10 gap-4">
            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[50%]">
              <label htmlFor="productPrice" className="text-sm md:text-xl">Product Price</label>
              <input type="number" name="productPrice" placeholder="Enter product asking/selling price" className=" border py-2 pl-3 w-full" />
            </div>
            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[50%]">
              <label htmlFor="productCondition" className="text-sm md:text-xl">Product Condition</label>
              <select className="bg-white border w-full h-10 px-4  font-bold" name="productCondition">
                <option className="p-4 text-lg" value="excellent">Excellent</option>
                <option className="p-4 text-lg" value="good">Good</option>
                <option className="p-4 text-lg" value="fair">Fair</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  px-10 gap-4">
            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[40%]">
              <label htmlFor="sellerContactNumber" className="text-sm md:text-xl">Seller Contact Number</label>
              <input type="text" name="sellerContactNumber" className=" border py-2 w-full" />
            </div>
            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[60%] ">
              <label htmlFor="sellerLocation" className="text-sm md:text-xl">Seller Location</label>
              <input type="text" name="sellerLocation" placeholder="i.e. Dhaka, Bangladesh" className=" pl-4 border py-2 w-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start px-10 gap-4">

            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[50%]">
              <label htmlFor="productCategory" className="text-sm md:text-xl">Product Category</label>
              <select className="bg-white border w-full h-10 px-4 font-bold" name="productCategory">
                <option className="p-4 text-lg" value="Bedroom">Bedroom</option>
                <option className="p-4 text-lg" value="Drawing">Drawing</option>
                <option className="p-4 text-lg" value="kitchen">Kitchen</option>
                <option className="p-4 text-lg" value="Office">Office</option>
                <option className="p-4 text-lg" value="Reading">Bedroom</option>

              </select>
            </div>
            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[50%]">
              <label htmlFor="productBuyingPrice" className="text-sm md:text-xl">Buying Price</label>
              <input type="number" name="productBuyingPrice" placeholder="Enter your product buying price" className="border py-2 w-full pl-3" />
            </div>
            <div className="space-y-0 md:space-y-2 py-1 md:py-4 w-full md:w-[50%]">
              <label htmlFor="yearOfPurchase" className="text-sm md:text-xl">Year of Purchase</label>
              <input type="number" name="yearOfPurchase" placeholder="Enter your product buying price" className="border py-2 w-full pl-3" />
            </div>
          </div>
          <div className="space-y-0 md:space-y-2 py-1 md:py-4 px-10 ">
            <label htmlFor="productDescription" className="text-sm md:text-xl">Product Description</label>
            <input type="text" name="productDescription" placeholder="Enter your product details" className="pl-3 border py-2 w-full" />
          </div>
          <div className="space-y-0 md:space-y-2 py-1 md:py-4 px-10 ">
            <label htmlFor="productImgURL" className="text-sm md:text-xl">Product Image URL</label>
            <input type="text" name="productImgURL" placeholder="Enter your product image URL" className="pl-3 border py-2 w-full" />
          </div>
          <div className="flex justify-center items-center py-4 px-10 mb-6">
            <input type="submit" value="Add Product" className="bg-sky-300 px-6 py-2 rounded-md hover:bg-sky-500 hover:text-white" />
          </div>

        </form>
      </div>
    </div>
  )
}

export default AddProduct