import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-2 py-4">
        <h2 className="text-3xl font-semibold ">Puraton Furniture Bazar</h2>
        <p>copywrite@Puraton Furniture Bazar</p>
      </div>
      <div className="flex flex-col justify-center items-center w-full border-opacity-50">

        <div className="divider flex justify-center gap-6">
          <span>
            <FaFacebookF className="text-2xl" />
          </span>
          <span>
            <FaGoogle className="text-2xl" />
          </span>
          <span>
            <FaTwitter className="text-2xl" />
          </span>
          <span>
            <FaGithub className="text-2xl" />
          </span>
        </div>

      </div>
      <div className="flex justify-center items-center gap-6 py-6">
        <Link>Legal Staff</Link>
        <Link>Privacy Policy</Link>
        <Link>Security</Link>
        <Link>Product</Link>
        <Link>Report</Link>
        <Link>Contact</Link>
      </div>
    </div>
  )
}

export default Footer
