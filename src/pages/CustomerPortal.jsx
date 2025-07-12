import React from 'react'
import NavBarCustomer from '../components/NavBarCustomer'
import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'
import { useState } from 'react';
import axios from "axios"
import MobileFooter from '../components/LoginSignUpFooter';
import LoginSignUpFooter from '../components/LoginSignUpFooter';

const CustomerPortal = ({ setToken }) => {
    const backEndUrl = "http://localhost:8000"
    const [isRegistering, setIsRegistering] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backEndUrl + "/api/user/admin", { email, password })
            if (response.data.success) {
                const token = response.data.token
                setToken(token)
                localStorage.setItem("token", token);

            }
            else {
                console.log("Invalid")
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=''>
            <NavBarCustomer goToLogin={() => setIsRegistering(false)} onRegisterClick={() => setIsRegistering(true)} onSignInClick={() => setIsRegistering(false)} />


            <div id='splash' className="w-full min-h-[calc(100vh-155px)] flex flex-col lg:flex-row items-center justify-center px-4
             bg-none lg:bg-[url('/src/assets/bg-div.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
                <div className='hidden lg:block ml-0 lg:ml-36 text-white leading-[62px]' id='splashLeft'>
                    <h1 className='font-bold text-[50px]'>POWERFUL, SMART, READY!</h1>
                    <h2 className='font-bold text-[30px]'>Casino transactions via crypto assets</h2>
                    <div>
                        <p>
                            <span className='font-semibold text-[21px]'>
                                Access cash or chips within minutes at casinos worldwide, 24/7!
                            </span>
                        </p>
                    </div>
                </div>
                {isRegistering ? (
                    <div
                        id="registerForm"
                        className="w-full max-w-[550px] mx-auto mt-9 lg:mt-0 bg-white rounded-[3px] py-10 px-4 sm:px-6"
                    >
                        <RegisterForm />
                    </div>

                ) : (
                    <div className=' lg:mt-0 bg-white rounded-[3px] py-8 px-4 lg:py-[40px] lg:px-[30px] mx-auto w-full max-w-xl' id='splashRight'>
                        <form className='flex flex-col' onSubmit={onSubmitHandler} action="">
                            <h1 className='font-semibold mb-5 text-3xl lg:text-[40px]'>Sign In</h1>
                            <p className='text-[#505050] leading-10 text-[16px]'>Enter your details below</p>

                            <div id='fieldContainer' className='mt-4 space-y-6'>
                                {/* Email Field */}
                                <div className='text-black'>
                                    <label htmlFor="email" className='block mb-2 font-semibold'>Email Address</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        id="email"
                                        className='bg-[#f5f5f5] rounded-[3px] font-Open Sans text-[1em] h-12 lg:h-[48px] py-2 px-4 w-full'
                                        type="email"
                                        maxLength={200}
                                    />
                                </div>

                                {/* Password Field */}
                                <div className='text-black'>
                                    <label htmlFor="password" className='block mb-2 font-semibold'>Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        id="password"
                                        className='bg-[#f5f5f5] rounded-[3px] font-Open Sans text-[1em] h-12 lg:h-[48px] py-2 px-4 w-full'
                                        type="password"
                                        maxLength={200}
                                    />
                                </div>

                                {/* Remember + Forgot */}
                                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between'>
                                    <div className='flex items-center'>
                                        <input className='scale-[1.2]' id='remember' type="checkbox" />
                                        <label htmlFor="remember" className='ml-2 text-[1em]'>Remember me</label>
                                    </div>
                                    <a className='underline text-[1em] mt-3 sm:mt-0' href="#">Forgot Password?</a>
                                </div>

                                {/* Sign In Button */}
                                <button
                                    type="submit"
                                    className='w-auto h-[50px] ml-24  text-white font-semibold bg-[#283382] hover:bg-blue-800 rounded-full px-[48px] mr-[10px]'>
                                    Sign in
                                </button>

                                {/* Register link */}
                                <div className='flex gap-1 justify-center mt-8 text-[1em]'>
                                    <span>No account?</span>
                                    <button
                                        type="button"
                                        onClick={() => setIsRegistering(true)}
                                        className="underline text-blue-600"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                )}

            </div>
            <Footer />
           <LoginSignUpFooter onRegisterClick={() => setIsRegistering(true)} onSignInClick={() => setIsRegistering(false)}/>
        </div>
    )
}

export default CustomerPortal
