import React from 'react'
import GoogleIcon from "../assets/icons/google_icon.png";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { signInSuccess } from '../redux/user/userSlice.js';


const OAuth = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);

      const res = await fetch('/server/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log('could not sign in with google', error);
    }
  };
  return (
    <div onClick={handleGoogleClick} className="w-1/2 mx-32 flex items-center justify-center text-center gap-2 border border-red-500 px-4 py-2 rounded-md">
    <img src={GoogleIcon} alt="google icon" className="w-8 h-8" />
    <p className="text-gray-700">Sign in with Google</p>
  </div>
  )
}

export default OAuth