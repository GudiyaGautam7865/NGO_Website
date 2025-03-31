// src/components/home/HomeSlider.jsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Slide data
const slides = [
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/041/401/578/small_2x/ai-generated-eco-art-campaign-for-an-environmental-ngo-emphasizing-harmony-with-nature-photo.jpeg",
    slogan: "Together, we can make a difference.",
  },
  {
    image: "https://thumbs.dreamstime.com/b/carbon-credit-green-energy-concept-generative-ai-297897298.jpg",
    slogan: "Serve All. Love All.",
},
  {
      image: "https://thumbs.dreamstime.com/b/vibrant-green-tree-rises-majestically-churning-ocean-waves-surrounded-dramatic-atmosphere-dark-clouds-mist-328258117.jpg",
      slogan: "Support Hope. Spread Smiles.",
    },
];

const AboutusHero = () => {

    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img
            src={slide.image}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg mb-4">
              {slide.slogan}
            </h2>
            <Link
              to="/donation"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-medium transition-all"
            >
              {t("donate")}
            </Link>
          </div>
        </div>
      ))}
    </div>
  



  )
}

export default AboutusHero