import React from 'react'
import Image from '../components/Image'

const PlanCard = ({text,title,image}) => {
  return (
    <div className='group w-[370px]  bg-white rounded-[20px] shadow-xl hover:bg-[#6B62C5] duration-500'>
        <h4 className='group-hover:text-white text-3xl text-third font-open font-bold text-center pt-[60px] pb-4 duration-500'>{text}</h4>

        <div className='group-hover:bg-[#E6E5F3] duration-500 w-[370px] h-[170px] bg-[#ECEDF0] relative'>

           <div className='w-full absolute top-[20px] left-[34px] '>
           <Image className='max-w-[278px] ' src={image}/>
           </div>
           
        </div>

        <h4 className='relative text-5xl text-secondary font-nunito font-extrabold text-center pt-5 pb-3'><span className='text-2xl font-meduim absolute top-[20px] left-[130px]'>$</span>{title}</h4>
        <p className='group-hover:text-[#E6E5F3] w-[252px] mx-auto pb-[59px] leading-8 text-center text-lg text-[#726E9E] font-normal font-paprika duration-500'> Responsive Design Dynamic Elements Service Pages Custom Design & Features</p>
    </div>
  )
}

export default PlanCard