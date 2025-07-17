import React from 'react'
import imgi from "../assets/imgi88.jpg"

const NameLogoutNav = () => {

    const dataFromApi = {
    UserName: "Ghana Test"
  }

  return (
    <div>
       <div className='flex gap-4 h-[48px] lg:h-[50px]  rounded-bl-lg rounded-br-lg text-white bg-[#2062A0] justify-between px-7 items-center '>
              <p className=' font-semibold ml-32 lg:ml-[436px]'>{dataFromApi.UserName}</p>
              <img src={imgi} className='w-12' alt="" />
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setToken("");
                }}
                className="pb-4 underline text-[12px] text-white"
              >
                Logout
              </button>
        </div>
    </div>
  )
}

export default NameLogoutNav
