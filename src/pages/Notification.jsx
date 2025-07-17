import SubNavBar from '../components/SubNavBar'
import React, { useState } from "react";
import { Bell, BellOff } from "lucide-react";
import NameLogoutNav from '../components/NameLogoutNav';
import Footer from '../components/Footer';

const Notification = () => {

  const [emailNotification, setEmailNotification] = useState("on");
  const [smsNotification, setSmsNotification] = useState("on");

  const ToggleButton = ({ type, selected, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 pt-1 pb-1 pr-16 pl-2 border rounded-[3px] 
        ${selected ? "bg-blue-100 border-blue-500 text-blue-700" : "bg-white border-gray-300 text-gray-500"}`}
    >
      {type === "on" ? <Bell size={18} /> : <BellOff size={18} />}
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );

  // Reusable Section
  const NotificationSection = () => (
    <div className="max-w-full p-6 bg-white   border-b border-gray-400 mb-4">
      <h2 className="text-[17px] mb-4">Asset deposited</h2>

      <div className="space-y-4">
        {/* Email Notification */}
        <div className="flex items-center gap-10">
          <span className="text-gray-400 text-sm">Email notification</span>
          <div className="flex gap-2">
            <ToggleButton
              type="on"
              selected={emailNotification === "on"}
              onClick={() => setEmailNotification("on")}
            />
            <ToggleButton
              type="off"
              selected={emailNotification === "off"}
              onClick={() => setEmailNotification("off")}
            />
          </div>
        </div>

        {/* SMS Notification */}
        <div className="flex items-center gap-12">
          <span className="text-gray-400 text-sm">SMS notification</span>
          <div className="flex gap-2">
            <ToggleButton
              type="on"
              selected={smsNotification === "on"}
              onClick={() => setSmsNotification("on")}
            />
            <ToggleButton
              type="off"
              selected={smsNotification === "off"}
              onClick={() => setSmsNotification("off")}
            />
          </div>
          
        </div>
        
      </div>
      
    </div>
  );

  return (
    <div className="h-screen overflow-x-hidden lg:h-[495px] flex flex-col">
      {/* Fixed Header */}
      <div className="flex-shrink-0">
        <SubNavBar />
       
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 overflow-y-auto px-0 bg-white">
       
        <NameLogoutNav/>
         <div className='px-0 lg:px-7 mb-16'>
         <h1 className='font-semibold px-6 py-4 text-[17px] bg-white border-b border-gray-300'>
          Notification settings
        </h1>
        <NotificationSection />
        <NotificationSection />
        <NotificationSection />
        <NotificationSection />

        
      </div>
         
      </div>
      <Footer/>
    </div>
  );
};

export default Notification;
