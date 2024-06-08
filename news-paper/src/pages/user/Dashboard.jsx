import React, { useEffect, useState } from "react";
import { FaSearch, FaShareAlt, FaBars } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserSidebar from "../../components/Usersidebar";

// import Data from "../components/Data";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-white rounded-full px-4 py-2 pl-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
        {/* Main content area */}

        <div>Dashboard content need to add</div>
      </div>
    </div>
  );
};

export default Dashboard;
