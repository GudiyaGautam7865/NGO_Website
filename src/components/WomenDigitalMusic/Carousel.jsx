import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    image: "https://a.storyblok.com/f/114532/1920x480/bb079941b5/bharthantayam-final.jpg/m/0x450",
    title: "Bharatanatyam",
    description:
      "Bharatanatyam is India’s oldest dance form and is one of the eight officially designated ‘cultural’ dance forms in the country. Once considered a prominent temple dance, this mesmerizing spectacle has permeated into performances easily accessible anywhere in the world.",
  },
  {
    id: 2,
    image: "https://static.vecteezy.com/system/resources/thumbnails/042/561/258/small_2x/beautiful-girl-dancer-of-indian-classical-dance-bharatanatyam-photo.jpg",
    title: "Kathak",
    description:
      "Kathak, a storytelling dance form from Northern India, is known for its intricate footwork, graceful spins, and expressive gestures. It evolved in Mughal courts and continues to captivate audiences worldwide.",
  },
  {
    id: 3,
    image: "https://t3.ftcdn.net/jpg/03/65/13/52/360_F_365135250_D4slgOo8wAYADnqNvaMtR9hIu17ySXmV.jpg",
    title: "Odissi",
    description:
      "Odissi is a classical Indian dance form originating from Odisha. It is characterized by its fluid movements, sculpturesque poses, and devotional themes inspired by Hindu deities.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-8 rounded-lg overflow-hidden shadow-lg">
      {/* Slide Container */}
      <div className="relative bg-black text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentIndex].id}
            className="relative w-full h-[450px] md:h-[500px] flex items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Background Image */}
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
            {/* Text Content */}
            <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold">{slides[currentIndex].title}</h2>
              <p className="mt-2 text-sm md:text-base text-gray-300">{slides[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
