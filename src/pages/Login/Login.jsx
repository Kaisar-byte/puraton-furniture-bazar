import { Link } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle, FaTwitter } from "react-icons/fa";


const Login = () => {
    return (
        <div>
            <div>
                <div className=" flex justify-center items-center w-full h-screen p-8">
                    <form>
                        <h2 className="text-black text-3xl py-10 text-center font-bold">Login</h2>
                        <div className="border px-12 py-16 flex flex-col space-y-6 w-[500px]">
                            <input type="text" className="h-14 text-lg pl-4 border bg-white w-full" name="email" placeholder="user/email" id="" />
                            <input type="password" className="h-14 text-lg pl-4 border bg-white w-full" name="password" placeholder="password" id="" />
                            <div className="flex justify-between">
                                <div>
                                    <input type="checkbox" name="remember" />
                                    <label htmlFor="remember" className="pl-2">Remember me</label>
                                </div>
                                <Link className="text-xs text-underline">Forgot Password</Link>
                            </div>
                            <div>
                                <p className="text-right">Don't have an account? please <Link className="font-semibold" to="/register">register</Link></p>
                            </div>
                            <div className="flex justify-center">
                                <Link className="bg-[#E7E7E7] hover:bg-sky-300 text-black px-5 py-2">Login</Link>
                            </div>
                            <div className="divider">Or login using</div>
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

export default Login
