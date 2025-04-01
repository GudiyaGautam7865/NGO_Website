import React from 'react'
import DonationHero from '../components/DonatePage/DonationHero'
import NewsSection from '../components/DonatePage/NewsSection'
import CardSection from '../components/home/CardSection'
// import Testimonials from "../components/DonatePage/Testimonials"; // Capitalized
import Test from '../components/DonatePage/Test'
function Donation() {
  return (
    <div>
      <DonationHero/>
      <NewsSection/>
      <CardSection/>
      {/* <Testimonials/> */}
      <Test />
      </div>
  )
}

export default Donation
