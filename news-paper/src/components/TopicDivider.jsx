import React from 'react'

const TopicDivider = ({title}) => {
  return (
    <div className="flex items-center w-full py-4">
        <div className="flex-1 h-4 bg-[#064E55]"></div>
        <button className="bg-red-500 px-6 md:px-24 py-2 md:py-4 text-white font-bold text-lg md:text-[25px]">
          {title}
        </button>
        <div className="flex-1 h-4 bg-[#064E55]"></div>
      </div>
  )
}

export default TopicDivider