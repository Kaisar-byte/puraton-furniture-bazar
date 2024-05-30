import { useContext } from "react"
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const Register = () => {
    const { register, UpdatedProfile, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const userName = form.username.value;
        const password = form.password.value;
        const email = form.email.value;
        const userType = form.userTypeOptions.value;
        const userData = {
            userName, userType
        }
        register(email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    UpdatedProfile(userData)
                        .then(() => {

                            console.log("profile updated")
                            console.log(userData)

                        })
                        .catch(err => {
                            const errMsg = err.message

                            console.log(errMsg)
                        })
                    toast("user created successfully")
                    navigate("/")
                }
            })
            .catch(err => {
                const errMsg = err.message;
                if (errMsg) {
                    toast(errMsg)
                }
            })
    }

    const handleGoogleSignUp = e => {

        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate("/")
                toast("User Created Successfully")

            })
            .catch(err => {
                const errMsg = err.message;
                console.log(errMsg)
            })
    }
    return (
        <div>
            <div className="py-10">

                <div className=" flex justify-center items-center w-full h-screen p-8">
                    <form onSubmit={handleRegister} className="bg-gray-200/85">
                        <h2 className="text-black text-3xl py-4 text-center font-bold">Register</h2>
                        <div className=" px-8 py-2  flex flex-col space-y-4 w-[400px]">
                            <input type="text" className="h-10 text-md pl-4 border bg-white w-full" name="username" placeholder="username" />
                            <input type="email" className="h-10 text-md pl-4 border bg-white w-full" name="email" placeholder="email" />
                            <input type="password" className="h-10 text-md pl-4 border bg-white w-full" name="password" placeholder="password" />

                            <div className="flex justify-start border pl-4 gap-6 py-2">
                                <h2 className="text-md">Register as a </h2>
                                <div className="mb-[0.125rem] me-4 inline-block min-h-[1.5rem] ps-[1.5rem]">
                                    <input
                                        className="relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                                        type="radio"
                                        name="userTypeOptions"
                                        id="buyer"
                                        value="Buyer" />
                                    <label
                                        className="inline-block ps-[0.15rem] hover:cursor-pointer text-md"
                                        htmlFor="buyer"
                                    >Buyer</label
                                    >
                                </div>


                                <div className="mb-[0.125rem] me-4 inline-block min-h-[1.5rem] ps-[1.5rem]">
                                    <input
                                        className="relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                                        type="radio"
                                        name="userTypeOptions"
                                        id="Seller"
                                        value="Seller" />
                                    <label
                                        className=" inline-block ps-[0.15rem] hover:cursor-pointer"
                                        htmlFor="Seller"
                                    >Seller</label
                                    >
                                </div>


                            </div>

                            <div className="flex justify-center">
                                <input type="submit" className="bg-[#e0dbdb] hover:bg-gray-600 hover:text-white text-black px-5 py-2 " value="Submit" />
                            </div>
                            <div>
                                <p className="text-right">Already have an account? please <Link className="font-semibold" to="/login">login</Link></p>
                            </div>
                            <div className="divider">Or register using</div>
                            <div className="flex gap-6 pb-6 justify-center items-center">
                                <span><FaFacebookF /></span>
                                <span><FaTwitter /></span>
                                <Link onClick={handleGoogleSignUp} ><FaGoogle /></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Register
