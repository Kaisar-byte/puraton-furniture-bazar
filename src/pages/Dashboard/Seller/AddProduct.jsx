import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import useUser from "../../../hooks/useUser";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAlert from "../../../hooks/useAlert";
import Loading from "../../../components/Loading/Loading";


const AddProduct = () => {

  const { user, loading } = useContext(AuthContext)
  const [loggedUser, loggedUserLoading] = useUser()
  const navigate = useNavigate()
  const postedAt = format(new Date(), 'yyyy MMM dd hh:mm aaa')
  if (loading && loggedUserLoading) {
    return <Loading />
  }
  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target;
    const productName = form.productName.value;
    const productPrice = form.productPrice.value;
    const sellerName = form.sellerName.value || loggedUser?.userName;
    const sellerContactNumber = form.sellerContactNumber.value;
    const sellerLocation = form.sellerLocation.value;
    const productCategory = form.productCategory.value;
    const productCondition = form.productCondition.value;
    const productBuyingPrice = form.productBuyingPrice.value;
    const productDescription = form.productDescription.value;
    const productImgURL = form.productImgURL.value;
    const postingTime = postedAt;
    const totalUsed = form.totalUsed.value;
    const sellerEmail = user?.email || loggedUser?.email;
    const clientType = loggedUser?.clientType


    const newProduct = {
      productName, productPrice, sellerContactNumber, sellerLocation, productCategory, productCondition, productBuyingPrice, productDescription, productImgURL, postingTime, totalUsed, sellerName, sellerEmail, clientType
    }


    if (productName && productPrice && sellerContactNumber && sellerLocation && productCategory && productCondition && productBuyingPrice && productDescription && productImgURL && postingTime && totalUsed && sellerName && sellerEmail && clientType) {
      axios.post(`http://localhost:5000/product`, newProduct, { withCredentials: true })
        .then(res => {
          console.log({ res });
          if (res.data.insertedId) {
            Swal.fire({
              title: 'Success',
              text: 'New product added successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            form.reset()
            navigate("/dashboard/seller/myproducts")
          }
        })
    } else {
      Swal.error("Failed to add product");
    }
    //   fetch("http://localhost:5000/addproduct", {
    //     method: 'POST',
    //     headers: {
    //       "content-type": "application/json"
    //     },
    //     body: JSON.stringify(newProduct)
    //   })
    //     .then(res => res.json())
    //     .then(data => {
    //       if (data.insertedId) {
    //         Swal.fire("New furniture added successfully");
    //         form.reset()
    //       }
    //     })
  }
  return (
    <div className="flex my-6 justify-center items-center  ">
      <div className=" w-full md:w-[60%]  mx-10 md:mx-auto  bg-[#8059c9] border border-red-300/40 rounded-md">
        <h2 className="text-2xl py-2 font-bold text-white bg-[#400AA7] text-center rounded-t-md">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-0 md:space-y-1 py-1 md:py-2 px-10 ">
            <label htmlFor="productName" className="text-sm md:text-xl ">Product Name</label>
            <input type="text" name="productName" placeholder="Enter name of your product" className=" border py-2 w-full pl-3" />
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start px-10 gap-4">
            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="productPrice" className="text-sm md:text-xl">Product Resale Price</label>
              <input type="number" name="productPrice" placeholder="Enter product asking/selling price" className=" border py-2 pl-3 w-full" />
            </div>
            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="productCondition" className="text-sm md:text-xl">Product Condition</label>
              <select className="bg-white border w-full h-10 px-4  font-bold" name="productCondition">
                <option className="p-4 text-lg" value="excellent">Excellent</option>
                <option className="p-4 text-lg" value="good">Good</option>
                <option className="p-4 text-lg" value="fair">Fair</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  px-10 gap-4">
            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="sellerName" className="text-sm md:text-xl">Seller Name</label>
              <input type="text" name="sellerName" placeholder="Enter Your Name" className="pl-4 border py-2 w-full" />
            </div>
            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="sellerContactNumber" className="text-sm md:text-xl">Seller Contact Number</label>
              <input type="text" name="sellerContactNumber" placeholder="Enter your contact number" className=" border py-2 w-full pl-4" />
            </div>

          </div>
          <div className="space-y-0 md:space-y-1 py-1 w-full px-10">
            <label htmlFor="sellerLocation" className="text-sm md:text-xl">Seller Location</label>
            <input type="text" name="sellerLocation" placeholder="Enter your location" className=" pl-4 border py-2 w-full" />
          </div>
          <div className="flex flex-col md:flex-row justify-start items-start px-10 gap-4">

            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="productCategory" className="text-sm md:text-xl">Product Category</label>
              <select className="bg-white border w-full h-10 px-4 font-bold" name="productCategory">
                <option className="p-4 text-lg" value="Bedroom">Bedroom</option>
                <option className="p-4 text-lg" value="Drawing">Drawing</option>
                <option className="p-4 text-lg" value="Kitchen">Kitchen</option>
                <option className="p-4 text-lg" value="Office">Office</option>
                <option className="p-4 text-lg" value="Reading">Reading</option>

              </select>
            </div>
            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="productBuyingPrice" className="text-sm md:text-xl">Purchase Price</label>
              <input type="number" name="productBuyingPrice" placeholder="Enter your product buying price" className="border py-2 w-full pl-3" />
            </div>
            <div className="space-y-0 md:space-y-1 py-1 md:py-2 w-full md:w-[50%]">
              <label htmlFor="totalUsed" className="text-sm md:text-xl">Years of Used</label>
              <input type="text" name="totalUsed" placeholder="Total used" className="border py-2 w-full pl-3" />
            </div>
          </div>
          <div className="space-y-0 md:space-y-1 py-1 md:py-2 px-10 ">
            <label htmlFor="productDescription" className="text-sm md:text-xl">Product Description</label>
            <input type="text" name="productDescription" placeholder="Enter your product details" className="pl-3 border py-2 w-full" />
          </div>
          <div className="space-y-0 md:space-y-1 py-1 md:py-2 px-10 ">
            <label htmlFor="productImgURL" className="text-sm md:text-xl">Product Image URL</label>
            <input type="text" name="productImgURL" placeholder="Enter your product image URL" className="pl-3 border py-2 w-full" />
          </div>
          <div className="flex justify-center items-center py-4 px-10 mb-6">
            <input type="submit" value="Add Product" className="bg-[#400AA7] text-white px-6 py-2 rounded-md hover:bg-sky-500 hover:text-white" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct