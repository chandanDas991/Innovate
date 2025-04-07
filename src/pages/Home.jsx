import React from 'react'
import Navber from '../layouts/Navber'
import Banner from '../layouts/Banner'
import Gallary from '../layouts/Banner'
import Contact from '../layouts/Contact'
import Service from '../layouts/Service'

const Home = () => {
  return (
    <div>
        <Navber/>
        <Banner/>
        <Gallary/>
        <Contact/>
        <Service/>
    </div>
  )
}

export default Home