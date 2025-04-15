import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import PlanCard from '../components/PlanCard'
import Flex from '../components/Flex'
import one from '../assets/Group1.png'
import two from '../assets/Group2.png'
import three from '../assets/Group3.png'


const Plan = () => {
  return (
    <section className='py-[100px] bg-[#F9F9FB]'>
        <Container>
            <Heading className='text-center pb-[64px]' text="Choose The Right Plan"/>
        <Flex className='justify-between'>
            <PlanCard text='Basic' title='160' image={one}/>
            <PlanCard text='Professional' title='240' image={two}/>
            <PlanCard text='Exclusive' title='325' image={three}/>
            
        </Flex>
        </Container>
    </section>
  )
}

export default Plan