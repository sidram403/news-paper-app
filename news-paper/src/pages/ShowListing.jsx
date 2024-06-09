import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const ShowListing = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [userListings, setUserListings] = useState([]);
  const [showListingsError, setShowListingsError] = useState("");

  useEffect(() => {
    const fetchListingNews = async () => {
      try {
        setShowListingsError(false);
        const res = await fetch(
          `https://news-paper-app.onrender.com/server/user/listings/${currentUser._id}`
        );
        const data = await res.json();
        if (data.success === false) {
          setShowListingsError(true);
          return;
        }

        setUserListings(data);
        console.log(data);
      } catch (error) {
        setShowListingsError(true);
      }
    };
    fetchListingNews();
  }, []);
  return (
    <div className="">
    <Header />
      {" "}
      <div className="py-20 px-32 flex gap-20 ">
      {userListings.map((item) => (
        <div className="w-[400px] h-auto ">
          <img
            src={item.imageUrls[0]}
            alt="horizontal image"
            className="w-full h-[300px] rounded-lg"
          />
          
          <div className="py-2 ">
            <p className="font-bold text-[25px]">{item.title}</p>
          </div>
          <div className="py-2">
            <p className="font-normal text-[18px]">{item.content}</p>
          </div>
          
        </div>
))}
</div>
      {userListings.length===0 && (
        <div>No Listing are there</div>
      )}
      <Footer />
    </div>
  );
};

export default ShowListing;
