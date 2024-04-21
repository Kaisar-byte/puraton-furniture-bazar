import { Link, useLocation } from "react-router-dom"
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom"



const Login = () => {
    const { Login, googleSignIn, setLoading } = useContext(AuthContext)
    const [error, setError] = useState(false)
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
                const user = result.user;

                if (user) {
                    setLoading(false)
                    navigate(from, { replace: true })
                    console.log(user)
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
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                const errMsg = err.message;
                setError(errMsg)
            })
    }
    return (
        <div>
            <div>
                <div className=" flex justify-center items-center w-full h-screen p-8">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-black text-3xl py-10 text-center font-bold">Login</h2>
                        <div className="border px-12 py-16 flex flex-col space-y-6 w-[500px]">
                            <input type="text" className="h-14 text-lg pl-4 border bg-white w-full" name="email" placeholder="user/email" />
                            <input type="password" className="h-14 text-lg pl-4 border bg-white w-full" name="password" placeholder="password" />
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
