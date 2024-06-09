import React, { useState } from "react";
import Logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserFailure, deleteUserSuccess, signOutUserStart } from "../redux/user/userSlice";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('http://localhost:3000/server/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };

  return (
    <div className="w-full flex px-4 py-4 md:px-10 md:py-4 flex-col h-auto bg-red-700 text-white">
      <div className="flex flex-row justify-between items-center">
        <div className="py-2 px-2 bg-white">
          <img src={Logo} alt="logo" className="w-20 h-10 md:w-28 md:h-10" />
        </div>
        <div
          className={`hidden md:flex md:justify-between md:items-center  flex-col md:flex-row mt-4 md:mt-0`}
        >
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 w-full md:w-auto">
              <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 text-[20px]">
                <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                  होम
                </li>
                <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                  पढ़िए
                </li>
                <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                  देखिये
                </li>
                <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                  हिन्दी
                </li>
                {currentUser && (
                  <Link to={"/create-news"}>
                    <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                      Create Post
                    </li>
                  </Link>
                )}
                {currentUser && currentUser.role==='user' && (
                  <Link to={"/news-list"}>
                    <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                      Show Listing
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <SearchIcon className="cursor-pointer" />

          <Link to="/dashboard">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <Link to={"/login"}>
                <button className="bg-white py-2 px-8 rounded-3xl text-black cursor-pointer">
                  लॉगिन करें
                </button>
              </Link>
            )}
          </Link>
          {currentUser && 
          <button onClick={handleSignOut} className="bg-white py-2 px-8 rounded-3xl text-black cursor-pointer">
          Logout
        </button>
          }
                
          <div className="inline md:hidden cursor-pointer" onClick={toggleMenu}>
            <MenuIcon />
          </div>
        </div>
      </div>
      <div
        className={`md:hidden md:justify-between md:items-center ${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex-row mt-4 md:mt-0`}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4">
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                होम
              </li>
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                पढ़िए
              </li>
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                देखिये
              </li>
              <li className="md:mr-12 cursor-pointer hover:underline mb-2 md:mb-0">
                हिन्दी
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
