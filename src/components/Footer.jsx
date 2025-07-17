import React from 'react'

const Footer = () => {
  return (
    <div className="hidden lg:h-[50px] text-black bg-white justify-between pl-0 items-center">
      <ul className="flex items-center justify-start py-4 text-[11px] px-8 border-y-[1px]">
        <li>
          <a className=" text-[#657478] mr-6" href="">Custody</a>
        </li>
        <li>
          <a className=" text-[#657478] mr-6" href="">General Terms & Conditions</a>
        </li>
        <li>
          <a className=" text-[#657478] mr-6" href="">Privacy Policy</a>
        </li>
        <li>
          <a className=" text-[#657478]" href="">Digital Asset Pledge Agreement</a>
        </li>
      </ul>
    </div>
  );
};


export default Footer
