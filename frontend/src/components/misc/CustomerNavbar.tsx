import {NavLink} from 'react-router-dom'
import { Home, Tag, ShoppingCart, User } from 'lucide-react'

export const CustomerNavbar = () => {
    const activeColor = "#505f33";
    const inactiveColor = "#9ca3af";
    return(
    <nav className="sticky bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200/80 flex justify-around py-2.5 px-2 shrink-0 z-30">
        <NavLink to="/catalog" end className="relative flex flex-col items-center text-gray-500">
            {({ isActive }) => (
                <>
                <div className={`absolute -top-2.5 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <Home size={24} color={isActive ? activeColor : inactiveColor}/>
                <span className={`text-[11px] font-medium mt-0.5 ${isActive ? "text-[#505f33]" : "text-gray-500"} `}>Home</span>
                </>
            )}
        </NavLink>

        <NavLink to="/deals" className="relative flex flex-col items-center text-gray-500">
            {({ isActive }) => (
                <>
                <div className={`absolute -top-2.5 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <Tag size={24} color={isActive ? activeColor : inactiveColor}/>
                <span className={`text-[11px] font-medium mt-0.5 ${isActive ? "text-[#505f33]" : "text-gray-500"} `}>Deals</span>
                </>
            )}
        </NavLink>

        <NavLink to="/cart" className="relative flex flex-col items-center text-gray-500">
            {({ isActive }) => (
                <>
                <div className={`absolute -top-2.5 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <ShoppingCart size={24} color={isActive ? activeColor : inactiveColor}/>
                <span className={`text-[11px] font-medium mt-0.5 ${isActive ? "text-[#505f33]" : "text-gray-500"} `}>Cart</span>
                </>
            )}
        </NavLink>

        <NavLink to="/account" className="relative flex flex-col items-center text-gray-500">
            {({ isActive }) => (
                <>
                <div className={`absolute -top-2.5 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                <User size={24} color={isActive ? activeColor : inactiveColor}/>
                <span className={`text-[11px] font-medium mt-0.5 ${isActive ? "text-[#505f33]" : "text-gray-500"} `}>Account</span>
                </>
            )}
        </NavLink>

    </nav>
    );
};