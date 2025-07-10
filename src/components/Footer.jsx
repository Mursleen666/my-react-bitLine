import React from 'react'

const Footer = () => {
    return (
        <div className='hidden lg:block'>
            <ul className='items-center border-y-[1px] flex min-w-[100%] py-5'>
                <li><a className='text-[14px] text-[#657478] ml-20 mr-4' href="">Custody</a></li>
                <li><a className='text-[14px] text-[#657478] mr-8' href="">General Terms & Conditions</a></li>
                <li><a className='text-[14px] text-[#657478] mr-8' href="">Privacy Policy</a></li>
                <li><a className='text-[14px] text-[#657478] mr-8' href="">Digital Asset Pledge Agreement</a></li>
            </ul>

        </div>
    )
}

export default Footer
