import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import List from '../components/List'
import Button from '../components/Button'

const Navber = () => {
  return (
    <nav className='bg-[#160c6d80] py-5 absolute top-0 left-0 w-full'>
        <Container>
            <Flex className='items-center'>
                <div className='w-2/12'>
                    <Image src={Logo} alt="logo image"/>
                </div>
                <div className='w-8/12'>
                    <ul className='flex gap-x-10 justify-center cursor-pointer'>
                        <List text="Home"/>
                        <List text="About"/>
                        <List text="Service"/>
                        <List text="Portfolio"/>
                        <List text="Price"/>
                        <List text="Blog"/>
                    </ul>
                </div>
                <div className='w-2/12 text-right'>
                    <Button text="Contact Us"/>
                </div>
            </Flex>
        </Container>
    </nav>
  )
}

export default Navber