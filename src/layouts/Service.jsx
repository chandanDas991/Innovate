import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Button from '../components/Button'
import ServiceCard from '../components/ServiceCard'
import Flex from '../components/Flex'
import two from '../assets/web-design2.png'
import one from '../assets/web-design1.png'
import three from '../assets/web-design3.png'
import four from '../assets/web-design4.png'
import five from '../assets/web-design5.png'


const Service = () => {
  return (
    <section className='py-[100px] bg-five'>
        <Container>
            <Flex className='gap-[30px] flex-wrap'>
            <div className='w-[370px]'>
                <Heading text='What We Do'/>
                <p className='w-[350px] leading-8 pt-5 pb-[56px] text-[#6C7D93] text-lg font-open font-normal'>We are now a team of strategists, engineers, designers, and marketers who both use and develop technology </p>
                <Button text='Contact Us'/>
            </div>
        <ServiceCard image={one} title='web Design & Dev' text='Social Media has changed the way we interact & do business while creating'/>
        <ServiceCard image={two} title='Software Dev' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
        <ServiceCard image={three} title='Content Writing' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
        <ServiceCard image={four} title='Digital Marketing' text='Social Media has changed the way we interact & do business while creating a new avenue.'/>
        <ServiceCard image={five} title='Support & Training' text='Content Marketing is the other fold of online advertisement. If you are looking to build'/>
           
            </Flex>
        </Container>
    </section>
  )
}

export default Service