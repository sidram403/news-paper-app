import React from "react";
import { MdDashboard, MdPerson, MdNotifications } from "react-icons/md";
import Logo from "../assets/logo.png";
import { VscGraphLine } from "react-icons/vsc";
import { FaCar, FaRegClock, FaPlus } from "react-icons/fa";
import { PiSeatBold } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiUser, CiSettings } from "react-icons/ci";
import { RiArticleFill } from "react-icons/ri"
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";





const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname === path;

  return (
    <div className="w-76 bg-[#F44336] text-white">
      <div className="p-6 text-center">
        <div>
          <img src={Logo} className=" p-2 bg-white h-20 w-52" alt="Logo" />
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          {[
            { icon: <GoHome className="w-6 h-6 mr-2 font-bold" />, text: "Dashboard", link: "/" },
            { icon: <CiUser className="w-6 h-6 mr-2 font-bold" />, text: "Profile", link: "/profile" },
            { icon: <RiArticleFill className="w-6 h-6 mr-2 font-bold" />, text: "My Article", link: "/roster" },
            { icon: <VscGraphLine className="w-6 h-6 mr-2 font-bold" />, text: "Analytics", link: "/report" },
            { icon: <CiSettings className="w-6 h-6 mr-2 font-bold" />, text: "Settings", link: "/manual-trips" },
            { icon: <AiOutlineUserAdd className="w-6 h-6 mr-2 font-bold" />, text: "Create User", link: "/ev-vehicle" },
            { icon: <FaEdit className="w-6 h-6 mr-2 font-bold" />, text: "Advertise", link: "/no-shows-seat-utilization" }
          ].map((item, index) => (
            <li
              key={index}
              className={`flex items-center px-6 py-2 hover:bg-[#D01319] cursor-pointer ${
                isActive(item.link) ? "bg-transparent border border-white" : ""
              }`}
            >
              {item.icon}
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;