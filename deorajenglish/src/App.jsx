import React from 'react'
import Navbar from './Componets/Navbar/Navbar'
import Herosection from './Componets/Herosection/Herosection'
import Aboutschool from './Componets/Aboutschool/Aboutschool'
import WhatWeDo from './Componets/WhatWeDo/WhatWeDo'
import Aboutdirector from './Componets/Aboutdirector/Aboutdirector'
import Fondar from './Componets/Fondar/Fondar'
import Eventss from './Componets/Eventss/Eventss'
import Ourfacilities from './Componets/Ourfacilities/Ourfacilities'
import UpcomingEvents from './Componets/Upcomeingevents/Upcomeingevents'
import Footer from './Componets/Footer/Footer'
import SchoolUpdates from './Componets/SchoolUpdates/SchoolUpdates'
import CTASection from './Componets/CTASection/CTASection'
import Testi from './Componets/Testi/Testi'
import Schoolimage from './Componets/Schoolimage/Schoolimage'

const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Herosection/>
      <SchoolUpdates/>
      <Ourfacilities/>
      <WhatWeDo/>
      <Aboutschool/>
      <Schoolimage/>
      <Fondar/>
      <Aboutdirector/>
      <Eventss/>
      <UpcomingEvents/>
      <CTASection/> <br />
      <Testi/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
