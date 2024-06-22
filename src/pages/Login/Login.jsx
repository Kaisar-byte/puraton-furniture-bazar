import { Link, useLocation } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom"
import useUser from "../../hooks/useUser";
import axios from "axios";



const Login = () => {
    const [loggedUser] = useUser()
    const [error, setError] = useState(false)
    const { Login, googleSignIn, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        Login(email, password)
            .then((result) => {
                const loggedUser = result.user;
                setLoading(false)
                const user = { email }
                if (loggedUser?.uid) {
                    // navigate(from, { replace: true })
                    // access token
                    axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
                        .then(res => {
                            if (res.data.success) {
                                navigate(from, { replace: true })
                            }
                        })
                }
            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg)
            })
    }
    const handleGoogleLogin = () => {
        console.log("is it working")
        googleSignIn()
            .then(result => {
                const user = result.user;
                setLoading(false)
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg)
            })
    }
    return (
        <div className="">
            <div className=" flex justify-center items-center p-6  ">
                <div className="m-8  ">
                    <form onSubmit={handleSubmit} className="bg-gray-200/85">
                        <h2 className="text-black text-3xl py-6 text-center font-bold">Login</h2>
                        <div className=" px-8 py-8  flex flex-col space-y-4 w-[350px]">
                            <input type="text" className="h-10 text-md pl-4 border bg-white w-full" name="email" placeholder="User Name/email" />
                            <input type="password" className="h-10 text-md pl-4 border bg-white w-full" name="password" placeholder="Password" />
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
                                <input type="submit" value="Login" className="bg-[#E7E7E7] hover:bg-slate-400 hover:text-white text-black px-5 py-2" />
                            </div>
                            <div className="divider">Or login using</div>
                            <div className="flex gap-6 justify-center items-center">
                                <span><FaFacebookF /></span>
                                <span><FaTwitter /></span>
                                <Link onClick={handleGoogleLogin}><span><FaGoogle /></span></Link>
                            </div>
                            {error && <div className="bg-sky-700 py-4 text-center text-white">
                                <span>{error}</span>
                            </div>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
