import { LuLayoutDashboard } from "react-icons/lu";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { FaHubspot } from "react-icons/fa";
import { BsChevronBarRight } from "react-icons/bs";
import appLogo from "@/assets/fire-safety-logo.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const isActive = (path: any) =>
    path === pathname ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700";
  return (
    <aside className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <nav className="h-full flex flex-col  border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between gap-x-1.5 items-center lg:flex lg:justify-center">
          <img
            src={appLogo}
            alt="iot fire detection logo"
            className="w-full lg:w-80 "
          />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 lg:hidden">
            <BsChevronBarRight></BsChevronBarRight>
          </button>
        </div>
        <div className="flex flex-col gap-y-5 my-5">
          <div className="flex gap-x-4 items-center py-3 px-5 xl:px-8 w-full hover:text-white hover:bg-[#001F3F] cursor-pointer">
            <LuLayoutDashboard className="text-xl md:text-2xl lg:text-2xl xl:text-4xl" />
            <NavLink
              className={`text-sm font-medium md:text-lg lg:text-xl block w-full text-left`}
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </div>
          <div className="flex gap-x-4 items-center py-3 px-5 xl:px-8 w-full hover:text-white hover:bg-[#001F3F] cursor-pointer">
            <PiClockCounterClockwiseBold className="text-xl md:text-2xl lg:text-2xl xl:text-4xl" />
            <NavLink
              className={`text-sm font-medium md:text-lg lg:text-md xl:text-lg block w-full text-left `}
              to="/alarmHistory"
            >
              Alarm History
            </NavLink>
          </div>
          <div className="flex gap-x-4 items-center py-3 px-5 xl:px-8 w-full hover:text-white hover:bg-[#001F3F] cursor-pointer">
            <FaHubspot className="text-xl md:text-2xl lg:text-2xl xl:text-4xl" />
            <NavLink
              className="text-sm font-medium md:text-lg lg:text-md xl:text-lg block w-full text-left"
              to="/devices"
            >
              Devices
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}
