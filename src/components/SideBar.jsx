import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../assets/img15.png"
import img2 from "../assets/img16.png"



const SideBar = () => {
    return (
        <div className='hidden lg:block w-[17%] min-h-screen bg-[#f2f2f2]'>
            <div className='flex flex-col  text-[15px]'>
                <NavLink className="flex gap-3 items-center bg-[#283382] pl-8 py-3" to="/">
                    <p className='hidden text-white text-[18px]  font-bold md:block'>Home</p>
                </NavLink>
                <NavLink className="flex gap-2 items-center hover:bg-slate-200 font-semibold pl-4 my-3" to="/transactions">
                    <img className='w-10 h-10' src={img} alt="" />
                    <p className='hidden md:block'>Transactions</p>
                </NavLink>
                <NavLink className="flex gap-2 items-center  hover:bg-slate-200 font-semibold pl-4" to="/transfer">
                    <img className='w-10 h-10' src={img2} alt="" />
                    <p className='hidden md:block'>Transfer</p>
                </NavLink>
            
                <button className='w-48 h-[40px] border-[1px] text-white text-[13px] font-semibold  border-[#283382] bg-[#283382] ml-3 mt-6 rounded-full px-[20px] hover:bg-blue-800 '>Deposit Crypto</button>
                <button className='w-48 h-[40px] border-[1px] text-[#283382] text-[13px] font-semibold border-[#283382] ml-3 mt-2 bg-transparent rounded-full px-[20px] '>Create Transaction</button>
             
            </div>
        </div>
    )
}

export default SideBar
