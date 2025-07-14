import { NavLink } from "react-router-dom";
import { Home, Star, Send, Menu } from "lucide-react";

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 lg:hidden shadow-md z-50">
      
    
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center text-sm text-[#283382] font-semibold"
            : "flex flex-col items-center text-sm text-gray-700"
        }
      >
        <Home size={24} />
        <span>Home</span>
      </NavLink>

    
      <NavLink
        to="/transactions"
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center text-sm text-[#283382] font-semibold"
            : "flex flex-col items-center text-sm text-gray-700"
        }
      >
        <Star size={24} />
        <span>Transactions</span>
      </NavLink>

      
      <NavLink
        to="/transfer"
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center text-sm text-[#283382] font-semibold"
            : "flex flex-col items-center text-sm text-gray-700"
        }
      >
        <Send size={24} />
        <span>Transfers</span>
      </NavLink>

     
      <NavLink
        to="/menuDash"
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center text-sm text-[#283382] font-semibold"
            : "flex flex-col items-center text-sm text-gray-700"
        }
      >
        <Menu size={24} />
        <span>More</span>
      </NavLink>
    </div>
  );
};

export default MobileFooter;
