import React, { useState } from "react";
import Logo from "../assets/logo.png";
import GoogleIcon from "../assets/icons/google_icon.png";
import { Divider} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
      role:'user'
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch('/server/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/login');
    } catch (error) {
      setLoading(false);
      setError(error.message);
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
            Sign Up
          </h2>
          <OAuth />
          <Divider className="text-gray-700 py-4 text-[12px]">Sign up with Email</Divider>

          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
              <label className="block text-gray-700 font-semibold">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="username"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="email"
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
              
            </div>
            <div>
              <button
                type="submit"
                className="mx-32 w-1/2 px-4 py-2 bg-red-500 text-white rounded-md font-bold hover:bg-red-600 "
              >
                Sign up
              </button>
            </div>
            <div className="w-full mx-32">
                <p className="text-[14px]">Already have a Account ? <Link to={'/login'}> <span className="cursor-pointer text-blue-500">Sign in</span></Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
