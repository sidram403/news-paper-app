import React from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { CiUser, CiSettings } from "react-icons/ci";
import { RiArticleFill } from "react-icons/ri"





const UserSidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isActive = (path) => pathname === path;

  return (
    <div className="w-76 bg-[#F44336] text-white">
      <div className="p-6 text-center">
        <div>
          <Link to={'/'}>  
          <img src={Logo} className=" p-2 bg-white h-20 w-52 cursor-pointer" alt="Logo" />
          </Link>
        </div>
      </div>
      <nav className="mt-6">
        <ul className="space-y-2">
          {[
            { icon: <GoHome className="w-6 h-6 mr-2 font-bold" />, text: "Dashboard", link: "/dashboard" },
            { icon: <CiUser className="w-6 h-6 mr-2 font-bold" />, text: "Profile", link: "/profile" },
            { icon: <RiArticleFill className="w-6 h-6 mr-2 font-bold" />, text: "My Article", link: "/roster" },
            { icon: <CiSettings className="w-6 h-6 mr-2 font-bold" />, text: "Settings", link: "/manual-trips" },
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

export default UserSidebar;