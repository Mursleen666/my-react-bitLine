import React from 'react'
import logo from "../assets/myLogo.svg"

const NavBarCustomer = () => {
  return (
    <div id='header' className='h-[100px] border-b-2 lg:h-[70px]'>
      <div className='px-[38px] py-2 justify-between flex' id='innerheader'>
        <div id='logo'>
            <img className='w-48 lg:w-36' src={logo} alt="" />
        </div>
        <div className='hidden lg:block' id='actions'>
            <div className='flex items-center' id='button'>
                <a href=""><button className='w-auto h-[50px] border-[1px] text-[#283382] font-semibold border-[#283382] bg-transparent rounded-full px-[48px] mr-[10px]'>Sign in</button></a>
                <a href=""><button className='w-auto h-[50px] border-[1px] text-white font-semibold border-[#283382] bg-[#283382] rounded-full px-[48px] hover:bg-transparent hover:text-[#283382]'>Register</button></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarCustomer
