import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";
import { IoMdClose } from "react-icons/io";

const EditUserModel = ({ userDetails, onUpdateUserDetails, onClose }) => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleUpdate = () => {
    const updatedDetails = {
      firstName,
      lastName,
      email,
      avatar: userDetails.avatar,
    };
    onUpdateUserDetails(updatedDetails);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(
        `https://news-paper-app.onrender.com/server/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      onClose(onClose);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-4">Edit User Details</h2>
          <IoMdClose onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">First Name</label>
            <input
              type="text"
              defaultValue="First Name"
              id="firstname"
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">Last Name</label>
            <input
              type="text"
              defaultValue="Last Name"
              id="lastname"
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              id="email"
              defaultValue={userDetails.email}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              id="password"
              defaultValue={userDetails.password}
              onChange={handleChange}
              className="w-full px-2 py-1 border rounded-md"
              placeholder="Leave blank to keep current password"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModel;
