import React from 'react'
import NavBarCustomer from '../components/NavBarCustomer'
import Footer from '../components/Footer'
import myImage1 from "../assets/bg-div.jpg"

const CustomerPortal = () => {
    return (
        <div className='w-full'>
            <NavBarCustomer />
            <div id='splash'  className="w-full min-h-[calc(100vh-155px)] flex flex-col lg:flex-row items-center justify-center px-4
             bg-none lg:bg-[url('/src/assets/bg-div.jpg')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
                <div className='hidden lg:block ml-0 lg:ml-48 text-white leading-[62px]' id='splashLeft'>
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
                <div className='mt-52 lg:mt-0 bg-white rounded-[3px] py-[40px] px-[30px] ml-72 ' id='splashRight'>
                    <form className='flex flex-col lg:flex-row' action="">
                        <div>
                            <h1 className='font-semibold mb-5 text-[40px]'>Sign In</h1>
                            <p className='text-[#505050] leading-[64px] text-[16px]'>Enter your details below</p>
                            <div id='fieldContainer'>
                                <div className='text-black '>
                                    <div className='mb-3 font-semibold' id='label'><label htmlFor="">Email Address</label></div>
                                    <div id="formField"><input className='bg-[#f5f5f5] rounded-[3px] font-Open Sans text-[1.0em] h-16  lg:h-[48px] py-[10px] px-[15px] w-full max-w-[600px] ' type="text" inputMode='email' maxLength={200} /></div>
                                </div>
                                <div className='text-black '>
                                    <div className='mb-3 mt-6 sm:mb-9 font-semibold' id='label'><label htmlFor="">Password</label></div>
                                    <div id="formField"><input className='bg-[#f5f5f5] rounded-[3px] font-Open Sans text-[1.0em] h-16  lg:h-[48px] py-[10px] px-[15px] w-full max-w-[600px] ' type="text" inputMode='email' maxLength={200} /></div>
                                </div>
                                <div className='flex items-center justify-between sm:mb-9 mt-6'>
                                    <div>
                                        <input className='scale-[1.6] ' id='remember' type="checkbox" value={false} />
                                        <label className='cursor-pointer ml-4 text-[1.2em] lg:text-[1em]' htmlFor="remember">Remember me</label>
                                    </div>
                                    <a className='underline text-[1.1em] lg:text-[1em]' href="#">Forgotten Password</a>
                                </div>
                                <button className='bg-[#d71c5c] rounded-full text-white  text-[1.4em] lg:text-[1em] h-16  lg:h-[48px] w-[600px] mt-9 sm:mt-12 ' type='submit'>Sign In</button>
                                <div className='flex gap-1 justify-center mt-8 sm:mt-11 text-[1.2em] lg:text-[1em]'>
                                    <span >
                                        No account?
                                    </span>
                                    <a className='underline' href="#">Register</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CustomerPortal
