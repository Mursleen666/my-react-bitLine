import { LogIn, UserPlus, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";
import LoginSignUpFooter from "../components/LoginSignUpFooter";

const MenuContent = () => {
    return (
        <>
            <NavBar />
            <div className=" min-h-screen pb-20 bg-white">



                <div className="mt-14 mb-48 gap-1 flex flex-col px-2 text-sm text-gray-700">
                    <div className=" bg-gray-50 pl-2 py-2">Custody</div>
                    <div className=" bg-gray-50 pl-2 py-2">General Terms & Conditions</div>
                    <div className=" bg-gray-50 pl-2 py-2">Privacy Policy</div>
                    <div className=" bg-gray-50 pl-2 py-2">Digital Asset Pledge Agreement</div>
                </div>




                <NavLink to="/login">
                    <button
                        type="submit"
                        className='w-auto h-[50px] ml-32  text-white font-semibold bg-[#283382] hover:bg-blue-800 rounded-full px-[48px] mr-[10px]'>
                        Sign in
                    </button>
                </NavLink>


            </div>
        </>
    );
};

export default MenuContent;
