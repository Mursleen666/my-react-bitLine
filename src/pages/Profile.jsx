import React from 'react'
import SubNavBar from '../components/SubNavBar'
import emailImg from "../assets/i2.svg"
import mobileImg from '../assets/i3.svg'
import countryImg from '../assets/i4.svg'
import locationImg from '../assets/i1.svg'
import Footer from '../components/Footer'
import NameLogoutNav from '../components/NameLogoutNav'

const Profile = () => {

    const apiData = {
        email: "Alexbhuti@gamil.com",
        mobile: "+21-2232-3321-1",
        country: "wakanda",
        address: "pghsf Government Schemem , face II"
    }

    return (
        <div className='h-[600px] lg:h-[495px] flex flex-col'>
            <SubNavBar />
            <div className='flex-col overflow-y-auto px-0 bg-white'>
                <NameLogoutNav />
                <div>
                    <div className='ml-11 mt-8' >
                        <div className='flex font-semibold text-[14px]'><img className='w-4 mr-3' src={emailImg} alt="" /><p>Email</p></div>
                        <p className='text-[12px] text-gray-800 ml-4 mt-4 lg:mt-2 mb-1 pb-3 border-b border-gray-200 my-4'>{apiData.email}</p>

                        <div className='flex font-semibold text-[14px]'><img className='w-4 mr-3' src={mobileImg} alt="" /><p>Mobile</p></div>
                        <p className='text-[12px] text-gray-800 ml-4 mt-4 lg:mt-2 mb-1 pb-3 border-b border-gray-200 my-4'>{apiData.mobile}</p>

                        <div className='flex font-semibold text-[14px]'><img className='w-4 mr-3' src={countryImg} alt="" /><p>Country of residence</p></div>
                        <p className='text-[12px] text-gray-800 ml-4  mt-4 lg:mt-2 mb-1 pb-3 border-b border-gray-200 my-4'>{apiData.country}</p>

                        <div className='flex font-semibold text-[14px]'><img className='w-4 mr-3' src={locationImg} alt="" /><p>Address</p></div>
                        <p className='text-[12px] mb-[102px] text-gray-800 ml-4  mt-4 lg:mt-2  pb-3 border-b border-gray-200 my-4'>{apiData.address}</p>
                    </div>

                </div>
               
            </div>
             <Footer />
        </div>
    )
}

export default Profile
