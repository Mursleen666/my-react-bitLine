import React from 'react'
import { NavLink } from 'react-router-dom'
import imgi from "../assets/imgi88.jpg"

const SubNavBar = ({ token, setToken }) => {
  
  const dataFromApi = {
    UserName: "Ghana Test"
  }
  return (
    <div>
      <div className='flex gap-4 text-sm h-[51px] lg:h-[51px]  text-white bg-[#283382] justify-between lg:justify-normal  items-center px-6' id="subNav">
        <NavLink className="ml-0 lg:ml-8" to='/profile' >
          Profile
        </NavLink>
        <NavLink className="ml-0 lg:ml-6" to='/notifications'>
          Notifications
        </NavLink>
        <NavLink className="ml-0 lg:ml-6" to='/security'>
          Security
        </NavLink>
      </div>
    
    </div>
  )
}

export default SubNavBar
