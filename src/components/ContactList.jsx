import React from 'react'
import Image from './Image'
import SubHeading from './SubHeading'
import Flex from './Flex'
import Oneoff from '../assets/one-off.png'

const ContactList = ({className}) => {
  return (
    <Flex className={`items-center gap-x-[37px] w-[568px] rounded-[12px] ${className}`}>
        <Image src={Oneoff}/>
        <SubHeading className='w-[319px]' text='We solve real-world problems through people and the web.'/>
    </Flex>
  )
}

export default ContactList