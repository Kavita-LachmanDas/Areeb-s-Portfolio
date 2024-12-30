import React from 'react'

import Hero from './conponents/Hero'
import About from './conponents/About'
import Service from './conponents/Service'
import Testimonials from './conponents/Testimonials'
import After from './conponents/After'
import Contact from './conponents/Contact'

export default function page() {
  return (
    <div>
      
      <Hero/>
      <About/>
      <Service/>
      <Testimonials/>
      <After/>
      <Contact/>
    </div>
  )
}
