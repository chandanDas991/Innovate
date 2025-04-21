import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import { FaStar } from "react-icons/fa6"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'





const AboutLayout = () => {
  return (
    <section className='py-[100px] bg-[#F8F8FF]'>
      <Container className='relative'>
        <Heading className='text-center pb-[152px]' text="What The People Thinks About Us"/>
      <div className='relative w-[1080px] pb-[56px] bg-white rounded-[20px] shadow-lg'>

              <div className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[147px] h-[147px] bg-aboutProfile rounded-full'>
              </div>
            <ul className='flex justify-center gap-x-[6px] pt-[120px]'>
              <li><FaStar className='text-[#FF7628]'/></li>
              <li><FaStar className='text-[#FF7628]'/></li>
              <li><FaStar className='text-[#FF7628]'/></li>
              <li><FaStar className='text-[#FF7628]'/></li>
              <li><FaStar className='text-[#FF7628]'/></li>
              
            </ul>
            <p className='w-[800px] mx-auto pt-8 pb-24 text-center text-[#726E9E] text-2xl font-normal font-paprika'>Lesser Replenish bearing they’re him cattle kind dominion. You which fill place. Land she’d subdue divided gathering blessed seasons it. Without, wherein days.</p>
            <h5 className='text-2xl text-[#221A2C] font-bold font-opne text-center'>Lukan Depina</h5>
            <p className='text-base text-[#726E9E] font-normal font-paprika text-center pt-1'>Ceo And Head Of Idea</p>
      </div> 


      <div className='absolute top-[424px] -left-[71px] flex w-[42px] h-[42px] bg-[#1BBF00] rounded-full justify-center items-center'>
      <IoIosArrowBack className='text-white'/>
      </div>

      <div className='absolute top-[424px] right-[20px] flex w-[42px] h-[42px] bg-[#1BBF00] rounded-full justify-center items-center '>
      <IoIosArrowForward className='text-white'/>
      </div>
      </Container>
    </section>
  )
}

export default AboutLayout