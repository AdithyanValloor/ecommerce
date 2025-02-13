import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import TextCarousel from '../components/TextCarousel'
import { Eye, EyeClosed, Lock, Mail, User } from 'lucide-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const backendURL = 'http://localhost:5000' || import.meta.env.VITE_BACKEND_URL

function LoginPage() { 
    
    const navigate = useNavigate()

    const [token, setToken] = useState(null)
    const [showPass, setShowPass] = useState(false)
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const [errors, setErrors] = useState({user: "", email: "", password: "" });

    const [newUser, setNewUser] = useState(false)

    const toggleUserMode = () => {

        setNewUser(prev => !prev);
        setUser(""); 
        setEmail("")
        setPassword("")
        setError("")
        setErrors({ user: "", email: "", password: "" }); 
    };

    const validate = () => {
        let valid = true;
        let newErrors = {user:"", email: "", password: "" };

        if (newUser) {

            if (!user.trim()) {
                newErrors.user = "Username is required"
                valid = false
            }else if(user.length < 3){
                newErrors.user = "Username must be at least 3 characters"
            }else if(!/^[a-zA-Z][a-zA-Z0-9]{2,19}$/.test(user)){
                newErrors.user = "Username cannot contain special characters"
            }
        }

        if (!email.trim()) {
            newErrors.email = "Email is required";
            valid = false
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            newErrors.email = "Enter a valid email";
            valid = false
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
            valid = false
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            valid = false
        }

        setErrors(newErrors)
        return valid
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const isValid = validate()
        if (!isValid) return
    
        try {
            let response
            if (newUser) {
                response = await axios.post(`${backendURL}/api/auth/signup`, { username: user, email, password })
                console.log(response)

                setToken(response.data.token)

                localStorage.setItem("username", response.data.username)
                localStorage.setItem("token", response.data.token)
                
                navigate('/')

            } else {
                response = await axios.post(`${backendURL}/api/auth/login`, { email, password })
                console.log(response);
                
                setToken(response.data.token)

                localStorage.setItem("username", response.data.username)
                localStorage.setItem("token", response.data.token)

                navigate('/')
            }
        } catch (error) {
            console.error("Error:", error.response?.data?.error)
            
            if (error.response) {
                setError(error.response?.data?.error || "Something went wrong!")
            } else {
                alert("Server error. Please try again later.")
            }
        }
    };
    

  return (
    <div>
        <div className='z-20'>
            <header>
                <nav className="bg-white h-20 shadow-md flex items-center justify-center">
                    {/* LOGO / TItle */}
                    <NavLink to={"/"}>
                    <h1 className="font-silkscreen text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl mx-6">
                        Virtumart
                    </h1>
                    </NavLink>
                </nav>
            </header>
            <div className="bg-red-300 flex flex-col justify-between">
                <h1 className="font-silkscreen text-center py-2 bg-green-300 text-[9px] md:text-base">
                    Trend. Tech. Timeless – Shop the Future of Fashion & Gadgets!
                </h1>
                <TextCarousel/>
            </div>
        </div>

{/* ---------------------------- LOGIN --------------------------- */}
        <div className='bg-gradient-to-r from-[#FFB6C1] via-[#FAD0C3] to-[#FBE7A1] min-h-screen flex items-center justify-center absolute w-full top-0 -z-10'>

            <div className="bg-slate-50 rounded-3xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-[90%] sm:w-[400px] md:w-1/2 lg:w-1/3 xl:w-1/4 min-w-[280px] lg:mt-36  flex flex-col">
                {!newUser && <div className='h-[380px] flex flex-col justify-between'>
                    <div className='w-full h-full flex items-end justify-center'>
                        <p className="text-lg sm:text-xl lg:text-2xl font-silkscreen font-light text-center">
                            Welcome
                        </p>
                    </div>
                    <div className="p-12 flex items-end pb-20">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-9 w-full relative">
                            <div className="flex flex-col gap-7">
                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        className={`font-light w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm p-2 border-b ${
                                            error || errors.email ? "border-red-500" : "border-gray-400"
                                        } px-10`}
                                    />
                                    <Mail strokeWidth={1} size={19} className="absolute top-1/2 -translate-y-1/2 left-2" />
                                    {errors.email && <p className="text-red-500 font-light absolute text-xs mt-1">{errors.email}</p>}
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className={`font-light w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm  p-2 border-b ${
                                            error || errors.password ? "border-red-500" : "border-gray-400"
                                        } px-10`}
                                    />
                                    <Lock strokeWidth={1} size={19} className="absolute top-1/2 -translate-y-1/2 left-2" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute top-1/2 -translate-y-1/2 right-2 p-2"
                                    >
                                        {showPass ? <Eye strokeWidth={1} size={19} /> : <EyeClosed strokeWidth={1} size={19} />}
                                    </button>
                                    {errors.password && <p className="text-red-500 font-light absolute text-xs mt-1">{errors.password}</p>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-green-700 font-silkscreen text-white p-2 rounded-full hover:bg-green-900 transition-all duration-200"
                            >
                                Login
                            </button>
                            <p className='text-center text-xs md:text-sm font-light absolute -bottom-14 my-3 left-1/2 -translate-x-1/2'>
                                New user?  
                                <button  
                                    type='button' className='text-blue-500 mx-1'
                                    onClick={toggleUserMode}
                                > Sign up</button>
                            </p>
                            {error && 
                                <p className='text-red-500 ] w-full text-center bottom-12 absolute text-sm mt-1'>
                                    {error}
                                </p>
                            }
                        </form>
                    </div>
                </div>}
    {/* ---------------------------------------- SIGNUP ----------------------------------------------------- */}
                {newUser && <div className='h-[450px] flex flex-col justify-between'>
                    <div className='h-full flex items-end justify-center'>
                        <p className="text-lg sm:text-xl lg:text-2xl font-silkscreen">
                            Sign Up
                        </p>
                    </div>
                    <div className="p-12 flex items-end pb-20">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-9 w-full relative">
                            <div className="flex flex-col gap-7">
                                {/* Username Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={user}
                                        onChange={(e) => setUser(e.target.value.toLowerCase())}
                                        placeholder="Username"
                                        className={`font-light w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm p-2 border-b ${
                                            errors.user ? "border-red-500" : "border-gray-400"
                                        } px-10`}
                                    />
                                    <User strokeWidth={1} size={19} className="absolute top-1/2 -translate-y-1/2 left-2" />
                                    {errors.user && <p className="text-red-500 font-light absolute text-xs mt-1">{errors.user}</p>}
                                </div>

                                {/* Email Field */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="Email"
                                        className={`font-light w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm p-2 border-b ${
                                            errors.email ? "border-red-500" : "border-gray-400"
                                        } px-10`}
                                    />
                                    <Mail strokeWidth={1} size={19} className="absolute top-1/2 -translate-y-1/2 left-2" />
                                    {errors.email && <p className="text-red-500 font-light absolute text-xs mt-1">{errors.email}</p>}
                                </div>

                                {/* Password Field */}
                                <div className="relative">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className={`font-light w-full bg-transparent outline-none placeholder:text-gray-600 placeholder:text-sm  p-2 border-b ${
                                            errors.password ? "border-red-500" : "border-gray-400"
                                        } px-10`}
                                    />
                                    <Lock strokeWidth={1} size={19} className="absolute top-1/2 -translate-y-1/2 left-2" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPass(!showPass)}
                                        className="absolute top-1/2 -translate-y-1/2 right-2 p-2"
                                    >
                                        {showPass ? <Eye strokeWidth={1} size={19} /> : <EyeClosed strokeWidth={1} size={19} />}
                                    </button>
                                    {errors.password && <p className="text-red-500 font-light absolute text-xs mt-1">{errors.password}</p>}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="bg-green-700 font-silkscreen text-white p-2 rounded-full hover:bg-green-900 transition-all duration-200"
                            >
                                Signup
                            </button>

                            {/* Signup and Login switch */}
                            <p className='text-center text-xs md:text-sm font-light w-full absolute -bottom-14 my-3 left-1/2 -translate-x-1/2'>
                                Already have an acount? 
                                <button  
                                    type='button' className='text-blue-500 mx-1'
                                    onClick={toggleUserMode}
                                    
                                >Login</button>
                            </p>
                            {error && 
                                <p className='text-red-500 ] w-full text-center bottom-12 absolute text-sm mt-1'>
                                    {error}
                                </p>
                            }
                        </form>
                    </div>

                </div>}
            
            </div>
        </div>

    </div>
  )
}

export default LoginPage
