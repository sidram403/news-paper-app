import React from 'react';

const NewsType = ({ item, activeType, onClick }) => {
  return (
    <div
      onClick={(e) => onClick(item.id, e)}
      key={item.id}
      className={`flex items-center gap-1 cursor-pointer p-1 ${
        activeType === item.id ? "bg-red-500 text-white" : ""
      }`}
    >
      <img
        src={item.img}
        alt="Icon"
        className="w-8 h-8 md:w-16 md:h-16"
      />
      <p className="font-semibold text-sm md:text-[20px]">
        {item.title}
      </p>
    </div>
  );
};

export default NewsType;
