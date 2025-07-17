import React from 'react';
import { NavLink } from 'react-router-dom';
import img from "../assets/img15.png";
import img2 from "../assets/img16.png";

const SideBar = ({ openDepositModal, openTransactionModal }) => {
  return (
    <div className="hidden lg:flex flex-col flex-shrink-0 basis-[17%] h-[492px] bg-[#f2f2f2]">
      <NavLink className="flex gap-3 items-center bg-[#283382] pl-8 py-3" to="/">
        <p className="hidden text-white text-[18px] font-bold md:block">Home</p>
      </NavLink>

      <NavLink className="flex gap-2 items-center hover:bg-slate-200 font-semibold pl-4 my-3" to="/transactions">
        <img className="w-10 h-10" src={img} alt="Transactions" />
        <p className="hidden md:block">Transactions</p>
      </NavLink>

      <NavLink className="flex gap-2 items-center hover:bg-slate-200 font-semibold pl-4" to="/transfer">
        <img className="w-10 h-10" src={img2} alt="Transfer" />
        <p className="hidden md:block">Transfer</p>
      </NavLink>

      {/* Deposit Button */}
      <button
        onClick={openDepositModal}
        className="w-44 h-[40px] border text-white text-[13px] font-semibold border-[#283382] bg-[#283382] ml-3 mt-6 rounded-full px-5 hover:bg-blue-800"
      >
        Deposit Crypto
      </button>

      {/* Create Transaction Button */}
      <button
        onClick={openTransactionModal}
        className="w-44 h-[40px] border text-[#283382] text-[13px] font-semibold border-[#283382] ml-3 mt-2 bg-transparent rounded-full px-5"
      >
        Create Transaction
      </button>
    </div>
  );
};

export default SideBar;
