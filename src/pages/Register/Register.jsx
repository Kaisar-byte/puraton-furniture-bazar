import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"


const Register = () => {
    return (
        <div>
            <div className="py-10">

                <div className=" flex justify-center items-center w-full h-screen p-8">
                    <form>
                        <h2 className="text-black text-3xl py-10 text-center font-bold">Register</h2>
                        <div className="border px-12 py-16 flex flex-col space-y-6 w-[500px]">
                            <input type="text" className="h-14 text-lg pl-4 border bg-white w-full" name="username" placeholder="username" id="" />
                            <input type="password" className="h-14 text-lg pl-4 border bg-white w-full" name="password" placeholder="password" id="" />
                            <input type="email" className="h-14 text-lg pl-4 border bg-white w-full" name="email" placeholder="email" id="" />
                            <div className="flex justify-center">
                                <Link className="bg-[#E7E7E7] text-black px-5 py-2">Register</Link>
                            </div>
                            <div>
                                <p className="text-right">Already have an account? please <Link className="font-semibold" to="/login">login</Link></p>
                            </div>
                            <div className="divider">Or register using</div>
                            <div className="flex gap-6 justify-center items-center">
                                <span><FaFacebookF /></span>
                                <span><FaTwitter /></span>
                                <span><FaGoogle /></span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
