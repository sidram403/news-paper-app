import React from 'react'

const HorizontalNewsItem = ({image, brandImage, brandName,listItem, title, description, note}) => {
  return (
        <div className='w-[350px] h-auto'>
            <img src={image} alt="horizontal image" className='w-full h-[200px] rounded-lg' />
            <div className='flex items-center justify-between py-4 w-[60%]'>
                <div className='flex items-center gap-2'>
                    <img src={brandImage} alt="brandImage" className='w-8 h-8' />
                    <p>{brandName}</p>
                </div>
                <p>1 {listItem[0]}</p>

            </div>
            <div className='py-2 '>
                <p className='font-bold text-[25px]'>{title}</p>
            </div>
            <div className='py-2'>
                <p className='font-normal text-[18px]'>{description}</p>
            </div>
            <div className='flex py-2 items-center justify-between w-[60%]'>
                <p className='text-red-500 text-[18px] font-bold'>{note}</p>
                <p>{listItem[1]}</p>
            </div>
        </div>
        

  )
}

export default HorizontalNewsItem