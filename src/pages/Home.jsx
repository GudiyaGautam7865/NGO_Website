import React from "react";
import HomeSlider from "../components/home/HomeSlider";
import About from "../components/home/About";
import CardSection from "../components/home/CardSection";
import Mission from "../components/home/Mission";
import Testimonial from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <About />
      <CardSection /> {/* 👉 Inserted before Mission */}
      <Mission />
      <Testimonial />
    </div>
  );
};

export default Home;
