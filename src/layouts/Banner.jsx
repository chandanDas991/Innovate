import React from 'react'
import Container from '../components/Container'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-banner w-full bg-no-repeat bg-cover bg-center'>
       <div className='bg-[#6b62c5e6] py-[246px] w-full'>
        <Container>
            <h1 className='text-center text-[84px] text-[#FAFAFE] font-bold font-open'>You're Unique.Your Website Should be too</h1>

            <SubHeading className='pt-5 pb-4 text-white leading-[40px] text-center w-[715px] mx-auto' text="A beautiful website passionately crafted for your small business.  Our Digital Agency development has changed the way brands and businesses use technology for growing business. "/>

            <div className='flex gap-x-7 items-center justify-center'>
                <Button text='Get Free Quoto'/>
                <Button text='Learn More'/>
            </div>
        </Container>
       </div>

    </section>
  )
}

export default Banner