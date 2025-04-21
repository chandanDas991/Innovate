import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Logo from '../assets/Logo.png'
import FooterList from '../components/FooterList'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='pt-[140px] pb-[50px] bg-[#48409C]'>
        <Container>
            <Flex>
                <div className='w-2/5'>
                <Image src={Logo}/>
                <p className='text-[#FEFEFE] text-lg font-normal font-nunito w-[449px] pt-[44px]  lineHeight-[180%]'>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                </div>

                <div className='w-1/5'>
                <h6 className='text-2xl font-open text-[#FEFEFE] font-semibold pb-12'>Features</h6>
                <ul className='flex flex-col gap-y-[30px]'>
                 <Link to='/'>
                 <FooterList text='Home'/>
                 </Link>

                 <Link to='/about'>
                 <FooterList text='About'/>
                 </Link>
                 
                 <FooterList text='Benifit'/>
                 <FooterList text='Pricing'/>
                 <FooterList text='Blog'/>
                </ul>
                </div>

                <div className='w-1/5'>
                <h6 className='text-2xl font-open text-[#FEFEFE] font-semibold pb-12'>Products</h6>
                <ul className='flex flex-col gap-y-[30px]'>
                 
                 <FooterList text='Task Management'/>
                 <FooterList text='Company growth'/>
                 <FooterList text='Time tracking'/>
                 
                </ul>
                </div>

                <div className='w-1/5'>
                <h6 className='text-2xl font-open text-[#FEFEFE] font-semibold pb-12'>Support</h6>
                <ul className='flex flex-col gap-y-[30px]'>
                 
                 <FooterList text='Customer service'/>
                 <FooterList text='Accessibility'/>
                 <FooterList text='Contact us'/>
                 
                </ul>
                </div>
            </Flex>

            <Flex className='justify-between pt-20'>
                <div>
                <p className='text-[#fefefee6] text-lg font-nunito font-semibold'>@20201 Innovate.All rights reserved</p>
                </div>
                <div>
                    <p className='text-[#fefefee6] text-lg font-nunito font-semibold inline'>Privacy policy</p>
                    <p className='pl-[60px] text-[#fefefee6] text-lg font-nunito font-semibold inline'>Terms & condition</p>
                </div>
            </Flex>
        </Container>
    </footer>
  )
}

export default Footer