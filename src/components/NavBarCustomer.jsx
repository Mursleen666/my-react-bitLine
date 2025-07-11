import React from 'react'
import logo from "../assets/myLogo.svg"

const NavBarCustomer = ({ onRegisterClick, onSignInClick }) => {
  return (
    <div id='header' className="h-[55px] border-b-2 lg:h-[70px]">
      <div className="px-[10px] lg:px-[38px] py-2 flex justify-between items-center" id='innerheader'>
        <div id='logo'>
          <img className="w-35 lg:w-36" src={logo} alt="" />
        </div>
        <div className='hidden lg:block' id='actions'>
          <div className='flex items-center' id='button'>
            <button
              onClick={onSignInClick} 
              className='w-auto h-[50px] border-[1px] text-[#283382] font-semibold border-[#283382] bg-transparent rounded-full px-[48px] mr-[10px]'>
              Sign in
            </button>
            <button
              onClick={onRegisterClick}
              className='w-auto h-[50px]  text-white font-semibold bg-[#283382] rounded-full px-[48px] hover:bg-blue-800'>
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBarCustomer
