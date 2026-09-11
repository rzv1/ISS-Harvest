import {Outlet} from "react-router-dom";
import {CustomerNavbar} from "../misc/CustomerNavbar.tsx";


export const CustomerLayout = () => {
    return (
        <div className="flex flex-col h-full w-full relative overflow-hidden">
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 scrollbar-none relative">
                <Outlet/>
            </div>
            <CustomerNavbar />
        </div>
    )
}