import { NavLink } from "react-router-dom";
import { LogIn, UserPlus, Menu } from "lucide-react";

const LoginSignUpFooter = ({ onRegisterClick, onSignInClick }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 lg:hidden shadow-md z-50">
            
            <button
                className="flex flex-col items-center text-sm text-gray-700"
                onClick={onSignInClick}
            >
                <LogIn size={24} />
                <span>Sign in</span>
            </button>

            <button
                className="flex flex-col items-center text-sm text-gray-700"
                onClick={onRegisterClick}
            >
                <UserPlus size={24} />
                <span>Register</span>
            </button>

            <NavLink
                to="/menu"
                className="flex flex-col items-center text-sm text-gray-700"
            >
                <Menu size={24} />
                <span>Menu</span>
            </NavLink>

        </div>
    );
};

export default LoginSignUpFooter;
