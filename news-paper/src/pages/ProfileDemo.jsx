import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaShareAlt, FaBars } from "react-icons/fa";
import Modal from "../components/EditUserModel"; // Ensure to create this component as described below
import Header from "../components/Header";
import UserSidebar from "../components/Usersidebar";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserFailure, deleteUserStart, deleteUserSuccess } from "../redux/user/userSlice";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";

const ProfileSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleUpdateUserDetails = (updatedDetails) => {
    setUserDetails(updatedDetails);
    setIsModalOpen(false);
  };

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/server/user/delete/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/server/auth/signout');
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
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div>
      <div className="min-h-screen flex">
        <UserSidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Profile</h2>
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

          <div className=" bg-gray-100 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-2xl">
              <div className="flex flex-col items-center">
                <form className="flex flex-col gap-4">
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    ref={fileRef}
                    hidden
                    accept="image/*"
                  />
                  <img
                    onClick={() => fileRef.current.click()}
                    src={formData.avatar || currentUser.avatar}
                    alt="profile"
                    className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
                  />
                  <p className="text-sm self-center">
                    {fileUploadError ? (
                      <span className="text-red-700">
                        Error Image upload (image must be less than 2 mb)
                      </span>
                    ) : filePerc > 0 && filePerc < 100 ? (
                      <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
                    ) : filePerc === 100 ? (
                      <span className="text-green-700">
                        Image successfully uploaded!
                      </span>
                    ) : (
                      ""
                    )}
                  </p>
                </form>

                <h1 className="text-3xl font-bold mt-4">
                {currentUser.username}
                </h1>
                <p className="text-gray-500">{currentUser.email}</p>
              </div>
              <div className="mt-6 space-y-4">
                <button
                  onClick={handleEditClick}
                  className="block w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"
                >
                  Edit User Details
                </button>
                <button
                  onClick={() => navigate("/create-news")}
                  className="block w-full bg-green-500 text-white text-center py-2 rounded-md hover:bg-green-600"
                >
                  Create Post
                </button>
                <button
                  onClick={() => navigate("/show-listings")}
                  className="block w-full bg-purple-500 text-white text-center py-2 rounded-md hover:bg-purple-600"
                >
                  Show Listings
                </button>
                <div className='flex justify-between mt-5'>
        <span
          onClick={handleDeleteUser}
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>

              </div>

              {isModalOpen && (
                <Modal
                  userDetails={currentUser}
                  onUpdateUserDetails={handleUpdateUserDetails}
                  onClose={() => setIsModalOpen(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
