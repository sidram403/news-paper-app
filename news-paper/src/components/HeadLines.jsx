import React from 'react'

const HeadLines = ({title, subtitle}) => {
  return (
    <div className='py-4 w-[30%]'>
        <h1 className='font-bold text-[18px]'>{title}</h1>
        <p className='font-normal text-[18px] text-slate-400'>{subtitle}</p>
    </div>
  )
}

export default HeadLines