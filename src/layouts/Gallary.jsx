import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ImageOne from '../assets/Image1.png'
import ImageTwo from '../assets/Image2.png'
import ImageThree from '../assets/Image3.png'
import ImageFour from '../assets/Image4.png'



const Gallary = () => {
  return (
    <section>
        <Container>
            <Flex className='justify-between relative'>
                <div className='absolute -top-[100px] left-0 -z-10'>
                <Image src={ImageOne}/>
                </div>

                <div className='absolute -top-[100px] left-[300px] -z-10'>
                <Image src={ImageTwo}/>
                </div>

                <div className='absolute -top-[100px] left-[900px] -z-10'>
               
                <Image src={ImageFour}/>
                </div>

                <div className='absolute -top-[30px] right-[300px] -z-10'>
                <Image src={ImageThree}/>
                </div>
                
              
            </Flex>
        </Container>
    </section>
  )
}

export default Gallary