import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Divider} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(signInStart());
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));

    }

  };

  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-1/2 bg-red-500 flex items-center justify-center">
        <div className=" text-center p-4 bg-white w-96 h-40">
          <img src={Logo} alt="logo" className="w-full h-full" />
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-5xl font-bold text-center mb-6 text-red-500 uppercase">
            Log in
          </h2>
          <OAuth />
          <Divider className="text-gray-700 py-4 text-[12px]">Sign in with Email</Divider>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id='email'
          onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                onChange={handleChange}
              />
              <div className="py-2">
                <p className="text-red-500 text-[12px] font-bold cursor-pointer">Forget Password</p>
              </div>
            </div>
            <div>
                
              <button
                type="submit"
                className="mx-32 w-1/2 px-4 py-2 bg-red-500 text-white rounded-md font-bold hover:bg-red-600 "
              >
                {'Sign in'}
              </button>
            </div>
            <div className="w-full mx-32">
                <p className="text-[14px]">Create a new Account ? <Link to={'/signup'}> <span className="cursor-pointer text-blue-500">Sign up</span></Link></p>
            </div>
          </form>
          {error && <p className='text-red-500 mt-5'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
