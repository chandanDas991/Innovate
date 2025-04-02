import React from 'react'
import Image from './Image'


const ServiceCard = ({image,title,text}) => {
  return (
    <div className='w-[370px] py-12 bg-white flex flex-col items-center justify-center rounded-[20px] shadow-xl group/one hover:bg-[#6B62C5] duration-500'>

        <Image src={image}/>

        <h4 className='text-[30px] group-hover/one:text-white text-[#141135] font-open font-bold duration-300'>{title}</h4>

        <p className=' pt-8 w-[278px] text-center text-lg group-hover/one:text-[#E6E5F3] text-[#726E9E] font-normal font-paprika pb-3 duration-300'>{text}</p>

        <h6 className='group/two relative text-lg text-[#141135] group-hover/one:text-white font-open font-bold'>Read more <span className='w-[25px] h-[40px] bg-[#1bbf0080] group-hover/one:bg-[#ffffff80] absolute -top-[6px] -right-[12px] rounded-r-[100px] group-hover/two:w-[120px] group-hover/two:rounded-l-[100px] duration-300'></span></h6>
        
    </div>
  )
}

export default ServiceCard