import React from 'react'

import DonationHero from '../components/DonatePage/DonationHero'



import Testimonials from '../components/DonatePage/Testimonials'
import NewsSection from '../components/DonatePage/NewsSection'
import CardSection from '../components/home/CardSection'


function Donation() {
  return (
    <div>
      <DonationHero/>
      <NewsSection/>
      <CardSection/>
   
  
    
      <Testimonials/>

    </div>
  )
}

export default Donation
