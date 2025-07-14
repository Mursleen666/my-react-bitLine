// components/DepositModal.jsx
import React from "react";
import deposit from "../assets/deposit.svg"

const DepositModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white w-[90%] md:w-[450px] rounded-sm p-6 relative">
        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-center mb-6">Deposit Crypto</h2>
        <img className="bg-white w-28 ml-36" src={deposit} alt="" />
        {/* Your deposit UI goes here */}
        <p className="text-left mt-14 text-gray-600">Select a Currency</p>
        <select className="mt-2 w-full border mb-6 rounded p-2">
          <option>Bitcoin</option>
          <option>Ethereum</option>
          <option>Tether</option>
          <option>USDC</option>
          <option>Bitcoin Test</option>
        </select>
      </div>
    </div>
  );
};

export default DepositModal;
