import React from 'react'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import Gallary from '../layouts/Gallary'
import Contact from '../layouts/Contact'
import Service from '../layouts/Service'
import Plan from '../layouts/Plan'
import AboutLayout from '../layouts/AboutLayout'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <div>
        <Navber/>
        <Banner/>
        <Gallary/>
        <Contact/>
        <Service/>
        <Plan/>
        <AboutLayout/>
        <Footer/>
    </div>
  )
}

export default Home
