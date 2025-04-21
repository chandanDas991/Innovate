import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'

const Footer = () => {
  return (
    <footer className='pt-[140px] pb-[50px] bg-[#48409C]'>
        <Container>
            <Flex>
                <div className='w-2/5'>
                <Image src={Logo}/>
                </div>
                <div className='w-1/5'></div>
                <div className='w-1/5'></div>
                <div className='w-1/5'></div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer