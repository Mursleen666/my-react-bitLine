import React from 'react'
import NavBarCustomer from '../components/NavBarCustomer'
import Footer from '../components/Footer'
import myImage1 from "../assets/bg-div.jpg"
import RegisterForm from '../components/RegisterForm'
import { useState } from 'react';

const CustomerPortal = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className=''>
            <NavBarCustomer onRegisterClick={() => setIsRegistering(true)} />

            <div id='splash' className="w-full min-h-[calc(100vh-155px)] flex flex-col lg:flex-row items-center justify-center px-4
             bg-none lg:bg-[url('/src/assets/bg-div.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
                <div className='hidden lg:block ml-0 lg:ml-35 text-white leading-[62px]' id='splashLeft'>
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
                        <form className='flex flex-col' action="">
                            <h1 className='font-semibold mb-5 text-3xl lg:text-[40px]'>Sign In</h1>
                            <p className='text-[#505050] leading-10 text-[16px]'>Enter your details below</p>

                            <div id='fieldContainer' className='mt-4 space-y-6'>
                                {/* Email Field */}
                                <div className='text-black'>
                                    <label htmlFor="email" className='block mb-2 font-semibold'>Email Address</label>
                                    <input
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
                                    className='bg-[#d71c5c] rounded-full text-white text-lg h-12 lg:h-[48px] w-full mt-8'
                                    type='submit'
                                >
                                    Sign In
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
        </div>
    )
}

export default CustomerPortal
