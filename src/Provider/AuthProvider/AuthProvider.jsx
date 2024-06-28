import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import app from "../../firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


export const AuthContext = createContext('')
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // register with email and password
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with email and password
    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign out option
    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const UpdatedProfile = (userData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userData)
    }

    // onauthstatechange side effect
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false)
            // if user exist then issue a token
            if (currentUser) {
                axios.post('https://puraton-furniture-bazar-server.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log("Response from token", res.data)
                    })
            } else {
                axios.post('https://puraton-furniture-bazar-server.vercel.app/logout', loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                    })
            }
        })
        return () => {
            return unSubscribe()
        }
    }, [user?.email])

    // all function object to pass on auth provider
    const authInfo = {
        user,
        register,
        Login,
        LogOut,
        googleSignIn,
        UpdatedProfile,
        setLoading, loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
