import React from 'react';

const NewsItem = ({ imageSrc, text }) => {
  return (
    <div className="rounded-lg w-full h-full relative cursor-pointer">
      <img src={imageSrc} alt="single news" className="w-full h-full" />
      <p className="absolute bottom-1 left-2 right-1 text-white font-semibold">{text}</p>
    </div>
  );
};

export default NewsItem;
