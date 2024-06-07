import React, { useEffect, useState } from "react";
import { FaSearch, FaShareAlt, FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Data from "../components/Data";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Daily");
  const [newsListingsArray, setNewsListingsArray] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleUpdateNewsStatus = async (id, allowNews) => {
    try {
      const res = await fetch(`/server/listing/updateNewsStatus/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allowNews }),
      });

      if (res.ok) {
        const updatedNews = await res.json();
        setNewsListingsArray((prev) =>
          prev.filter((news) => news._id !== id)
        );
        toast.success(`News "${updatedNews.title}" given ${allowNews ? "access" : "decline"}`);
      } else {
        console.log("Failed to update news status");
        toast.error("Failed to update news status");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("An error occurred while updating news status");
    }try {
      const res = await fetch(`/server/listing/updateNewsStatus/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allowNews }),
      });

      if (res.ok) {
        setNewsListingsArray((prev) =>
          prev.map((news) =>
            news._id === id ? { ...news, allowNews } : news
          )
        );
      } else {
        console.log("Failed to update news status");
      }
    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    const fetchNewsDetails = async () => {
      try {
        const res = await fetch("/server/listing/getNewsListings");
        const data = await res.json();
        console.log(data);

        const filteredData = data.filter(news => news.allowNews === false);
      setNewsListingsArray(filteredData);
      console.log(data);


      } catch (error) {
        console.log(error.message);
      }
    };
    fetchNewsDetails();
  }, []);

  return (
    <div className="min-h-screen flex">
      <Sidebar />

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
        {newsListingsArray.map((news) =>(
          <div className="flex border p-4" key={news._id}>
          <div className="flex-shrink-0 mr-4">
            <img
              src={news.imageUrls[0]}
              alt="news"
              className="w-52 h-52 object-cover"
            />
          </div>
          <div className="flex-grow">
            <div className="bg-red-500 text-white p-2 mb-2">"Headline"</div>
            <div className="text-orange-500 font-bold mb-2">
              {news.title}
            </div>
            <div className="text-black mb-2">{news.content}</div>
            <div className="text-gray-500 mb-4">{news.useRef}</div>
            <div className="flex space-x-2">
            <button
                  className="bg-green-500 text-white py-1 px-3 rounded"
                  onClick={() => handleUpdateNewsStatus(news._id, true)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handleUpdateNewsStatus(news._id, false)}
                >
                  Decline
                </button>
            </div>
          </div>
        </div>
        ))}
        {newsListingsArray.length===0 && (
          <div>No news request found</div>
        )}
        
      </div>
    </div>
  );
};

export default Dashboard;
