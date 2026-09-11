import {NavLink} from 'react-router-dom'
import { CirclePlus, BaggageClaimIcon, NetworkIcon } from 'lucide-react'

export const ManagerNavbar = () => {
    const activeColor = "#505f33";
    const inactiveColor = "#9ca3af";
    return (
        <nav className="sticky bottom-0 left-0 right-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200/80 flex justify-around py-3 px-2 shrink-0 z-30">
            <NavLink to="/manager/add" className="relative flex flex-col items-center">
                {({ isActive }) => (
                    <>
                    <div className={`absolute -top-3 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    <CirclePlus size={24} color={isActive ? activeColor : inactiveColor}></CirclePlus>
                    </>
                )}
            </NavLink>

            <NavLink to="/manager/inventory" end className="relative flex flex-col items-center">
                {({ isActive }) => (
                    <>
                    <div className={`absolute -top-3 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    <NetworkIcon size={24} color={isActive ? activeColor : inactiveColor}></NetworkIcon>
                    </>
                )}
            </NavLink>

            <NavLink to="/manager/stock" className="relative flex flex-col items-center">
                {({ isActive }) => (
                    <>
                    <div className={`absolute -top-3 w-12 h-1 bg-[#7b8964] rounded-b-md transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    <BaggageClaimIcon size={24} color={isActive ? activeColor : inactiveColor}></BaggageClaimIcon>
                    </>
                )}
            </NavLink>
        </nav>
    );
};