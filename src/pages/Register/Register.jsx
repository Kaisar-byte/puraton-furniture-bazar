import { useContext, useState } from "react"
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';

const Register = () => {
    const [userType, setUserType] = useState("Buyer");
    const { register, UpdatedProfile, googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const userName = form.username.value;
        const password = form.password.value;
        const email = form.email.value;
        const clientType = userType


        const newUser = {
            userName, email, clientType
        }


        register(email, password)
            .then((result) => {
                const user = result.user;
                if (user) {
                    console.log(user)
                    toast("user created successfully");
                    UpdatedProfile(newUser)
                        .then(() => {
                            console.log("profile updated")

                        })
                        .catch(err => {
                            const errMsg = err.message

                            console.log(errMsg)
                        })

                    fetch("http://localhost:5000/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newUser)
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))
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
    const toggleUserType = () => {
        setUserType(prevType => (prevType === "Buyer" ? "Seller" : "Buyer"));
        console.log(userType)
    };




    const handleGoogleSignUp = () => {

        googleSignIn()
            .then(result => {
                const user = result.user;
                const socialUser = {
                    userName: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL,
                    clientType: "Buyer"
                }
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(socialUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
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

                            <div className="flex justify-start pl-4 gap-6 py-2">


                                <div className="flex justify-center items-center gap-4 py-2">
                                    <label>Register as a </label>
                                    <div className="border border-gray-500/50 rounded-lg ml-6">
                                        <button
                                            type="button"
                                            onClick={toggleUserType}
                                            className={`px-4 py-2 rounded-md cursor-pointer rounded-r-none ${userType === "Seller" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                                        >
                                            Buyer
                                        </button>
                                        <button
                                            type="button"
                                            onClick={toggleUserType}
                                            className={`px-4 py-2 rounded-md rounded-l-none cursor-pointer ${userType === "Buyer" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                                        >
                                            Seller
                                        </button>
                                    </div>
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
