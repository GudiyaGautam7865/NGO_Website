import React from 'react'
import About from "../components/home/About";
import AboutusHero from '../components/about/AboutusHero';
import AboutJourney from '../components/about/AboutJourney';
import AboutCard from '../components/about/AboutCard';
import AboutArticle from '../components/about/AboutArticle';


function AboutUs() {
  return (
    <div>
  <AboutusHero/>
      <About />
      <AboutArticle/>
      <AboutCard/>
      <AboutJourney/>
   
    </div>
  )
}

export default AboutUs
