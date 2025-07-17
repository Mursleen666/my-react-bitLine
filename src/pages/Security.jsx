import React, { useState } from 'react';
import { Pencil } from 'lucide-react';
import passwordimg from '../assets/imgPassword.svg'
import mobileimg from '../assets/imgMobile.svg'
// import addressimg from '../assets/imgAddress.svg'
// import accountimg from '../assets/imgAccount.svg'
import imgiAuth from '../assets/imgiAuth.png'
import imgiSms from '../assets/imgiSms.png'
import SubNavBar from '../components/SubNavBar';
import NameLogoutNav from '../components/NameLogoutNav';
import Footer from '../components/Footer';



const Security = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showMobileModal, setShowMobileModal] = useState(false);

  const handleOpenPasswordModal = () => setShowPasswordModal(true);
  const handleClosePasswordModal = () => setShowPasswordModal(false);

  const handleOpenMobileModal = () => setShowMobileModal(true);
  const handleCloseMobileModal = () => setShowMobileModal(false);

  const apiFetchData = [
    {
      time: '17/07/25 09:28 AM',
      browser: 'Chrome 138.0 (Windows 10) Other',
      ip: '2406:d00:ccce:4a7e:81af:1240:42c5:28fd, 147.243.21',
      location: 'Unknown Location',
    },
    {
      time: '17/07/25 05:09 AM',
      browser: 'Chrome 138.0 (Windows 10) Other',
      ip: '117.102.61.28, 147.243.112.245, 192.166.65.187',
      location: 'Unknown Location',
    },
    {
      time: '17/07/25 02:35 AM',
      browser: 'Chrome 138.0 (Windows 10) Other',
      ip: '117.102.61.28, 147.243.112.232, 192.166.65.187',
      location: 'Unknown Location',
    },
    {
      time: '17/07/25 01:30 AM',
      browser: 'Chrome 138.0 (Windows 10) Other',
      ip: '2406:d00:ccce:4a7e:51f8:a681:cc8:cafb, 147.243.215',
      location: 'Unknown Location',
    }]

  return (
    <div className='h-screen lg:h-[495px] flex flex-col'>
      <SubNavBar/>
      <div className="flex-1 overflow-y-auto px-0 bg-white">
        <NameLogoutNav/>
      <div className="max-w-md mx-0 p-6 bg-white rounded-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Security</h2>

        {/* Settings */}
        <div className="space-y-4">
          {/* Password */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-3">
              <img className='w-4' src={passwordimg} alt="" />
              <div>
                <p className="font-semibold">Password</p>
                <p className="text-sm text-gray-600">*******</p>
              </div>
            </div>
            <button
              onClick={handleOpenPasswordModal}
              className="p-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-3">
              <img className='w-4' src={mobileimg} alt="" />
              <div>
                <p className="font-semibold">Mobile</p>
                <p className="text-sm text-gray-600">+923204457080</p>
              </div>
            </div>
            <button
              onClick={handleOpenMobileModal}
              className="p-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </div>

          {/* Address */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-3">
              <img className='w-4' src={""} alt="" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-gray-600">-</p>
              </div>
            </div>
            <button className="p-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50">
              <Pencil className="w-4 h-4" />
            </button>
          </div>

          {/* Account Activation */}
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-3">
              <img className='w-4' src={""} alt="" />
              <div>
                <p className="font-semibold">Account Activation</p>
                <p className="text-sm text-gray-600">18/01/2025</p>
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full bg-pink-700 hover:bg-pink-800 text-white font-semibold py-2 rounded-full">
          Deactivate Account
        </button>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md max-w-md w-full relative">
            <h3 className="text-xl font-semibold mb-4 text-center">Edit Password</h3>

            <label className="block mb-2 text-sm font-medium text-gray-700">Old password</label>
            <input
              type="password"
              className="w-full mb-2 p-2 border rounded border-red-500 bg-red-50"
              placeholder="Enter your current password"
            />
            <p className="text-red-600 text-sm mb-4">Please enter your current password</p>

            <label className="block mb-2 text-sm font-medium text-gray-700">New password</label>
            <input
              type="password"
              className="w-full mb-4 p-2 border rounded"
              placeholder="Enter new password"
            />

            <label className="block mb-2 text-sm font-medium text-gray-700">Confirm new password</label>
            <input
              type="password"
              className="w-full mb-4 p-2 border rounded"
              placeholder="Confirm new password"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleClosePasswordModal}
                className="px-4 py-2 rounded border border-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button className="px-4 py-2 rounded bg-pink-600 text-white font-semibold hover:bg-pink-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Modal */}
      {showMobileModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md max-w-md w-full relative text-center">
            <h3 className="text-2xl font-bold mb-4">Update Phone Number</h3>
            <div className="flex justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 2h8a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2z"
                />
              </svg>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">New phone number</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100 mb-6 text-center"
              defaultValue="+92 320 4457080"
            />

            <div className="flex justify-center space-x-4">
              <button
                onClick={handleCloseMobileModal}
                className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50"
              >
                Cancel
              </button>
              <button className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}



      <div className="p-6 border-t-[1px] border-b-[1px] border-gray-300 mb-5 max-w-2xl">
        <h2 className="text-xl font-semibold mb-4">Two-factor authentication</h2>

        
          {/* Authenticator App */}
          <div className="border rounded-[3px] border-[#283382] bg-[#DFE1EC] p-3 flex items-center justify-between mb-3 shadow-sm">
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <img aria-label="Authenticator" src={imgiAuth} alt="" />
              </div>
              <span className="text-lg font-medium text-gray-800">Authenticator App</span>
            </div>
            <button className="bg-[#283382] text-white text-sm px-4 py-2 rounded-full hover:bg-blue-800 transition">
              Update App
            </button>
          </div>

          {/* SMS Authentication */}
          <div className="border rounded-[3px] bg-white p-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              {/* Placeholder for icon */}
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <img aria-label="Authenticator" src={imgiSms} alt="" />
              </div>
              <div>
                <div className="text-lg font-medium text-gray-800">SMS</div>
                <div className="text-sm text-gray-600">Phone number : +923204457080</div>
              </div>
            </div>
            <button className="bg-gray-200 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition text-[#283382] font-medium">
              Enable SMS Authentication
            </button>
          </div>
      </div>




      <div className="p-6 mb-14">
        <h2 className="text-xl font-semibold mb-4">Last Sessions</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left text-[13px] font-semibold text-blue-900">
                <th className="p-3">Signed in</th>
                <th className="p-3">Browser</th>
                <th className="p-3">IP address</th>
                <th className="p-3">Location</th>
              </tr>
            </thead>
            <tbody>
              {apiFetchData.map((session, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="py-5 text-[12px]">{session.time}</td>
                  <td className="p-3 text-[12px] font-medium text-gray-900">
                    {session.browser}
                  </td>
                  <td className="p-3 text-[12px] text-gray-700 whitespace-pre-wrap">
                    {session.ip}
                  </td>
                  <td className="p-3 text-[12px] text-gray-700">
                    {session.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Security;
