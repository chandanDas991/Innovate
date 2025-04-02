import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ImageOne from '../assets/Image1.png'
import ImageTwo from '../assets/Image2.png'
import ImageThree from '../assets/Image3.png'
import ImageFour from '../assets/Image4.png'
import ImageFive from '../assets/element.png'
import GallaryCard from '../components/GallaryCard'


const Gallary = () => {
  return (
    <section className='bg-[#F9F9FB] relative -z-20'>
        <Container>
            <Flex className='justify-between relative'>
                <div className='relative -top-[120px] left-0 -z-10'>
                <Image src={ImageOne}/>
                </div>

                <div className='relative -top-[120px] left-0 -z-10'>
                <Image src={ImageTwo}/>
                </div>

                <div className='relative -top-[10px] right-[0px] -z-10'>
                <Image src={ImageThree}/>
                </div>

                <div className='relative -top-[106px] left-[0px] -z-10'>
               
               <Image src={ImageFour}/>
               </div>
            </Flex>

            <Flex className='justify-between pb-[100px]'>
                <GallaryCard text='Happy client' value='53k'/>
                <GallaryCard text='Projects Done' value='10k'/>
                <GallaryCard text='Gets Award' value='120'/>
                <GallaryCard text='Operated Years' value='16'/>
            </Flex>
            <div className='absolute w-[200px] h-[px] right-0 top-0 justify-between'>
                <Image src={ImageFive}/>
            </div>

            
        </Container>
    </section>
  )
}

export default Gallary