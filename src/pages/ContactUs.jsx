import React from 'react'
// import ContactUsHero from '../components/ContactUs/ContactUsHero'

import Testimonial from '../components/home/Testimonial'
import MyMap from '../components/ContactUs/MyMap'
import GetInTouch from '../components/ContactUs/GetInTouch'
import ContactSection from '../components/ContactUs/ContactSection'
import CollapsibleSections from '../components/ContactUs/CollapsibleSections'
import HeroContact from '../components/ContactUs/HeroContact'

function ContactUs() {
  return (
    <div>
      <HeroContact/>
      {/* <ContactUsHero/> */}
      <GetInTouch/>
     
      <CollapsibleSections/>
      <ContactSection/>
      <MyMap/>
      <Testimonial/>
    </div>
  )
}

export default ContactUs
