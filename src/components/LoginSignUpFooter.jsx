import { NavLink } from "react-router-dom";
import { LogIn, UserPlus, Menu } from "lucide-react";
import { Routes, Route } from 'react-router-dom'


const LoginSignUpFooter = ({ onRegisterClick, onSignInClick }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 lg:hidden shadow-md z-50">


            <Link className={"flex flex-col items-center text-sm text-gray-700"}>
                <LogIn onClick={onSignInClick} size={24} />
                <span>Sign in</span>
            </Link>


            <Link className={"flex flex-col items-center text-sm text-gray-700"}>
                <UserPlus onClick={onRegisterClick} size={24} />
                <span>Register</span>
            </Link>


            <Link className={"flex flex-col items-center text-sm text-gray-700"} to="/menu">
                <Menu size={24} />
                <span>Menu</span>
            </Link>

        </div>
    );
};

export default LoginSignUpFooter;
