import Journey1 from "../../assets/Journey1.webp";
import React from "react";
import Journey2 from "../../assets/Journey2.webp";
import Journey3 from "../../assets/Journey3.webp";

import AboutJourney1 from "./AboutJourney1";
const AboutJourney = () => {
  return (
    <div className="text-center mt-10 mb-5">
      <h1 className="text-3xl font-bold">Our Journey</h1>
      <div className="mt-5 flex flex-wrap gap-5 justify-center">
        {[  
          { year: "1985", title: "Established", img: "https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/07/07175912/usa-step1.webp", desc: "Free-of-cost food distribution for the patients and attendants in government hospitals." },
          { year: "1990", title: "Orphanage", img: "https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/07/07175912/usa-step2.webp", desc: "An orphanage providing education, health, nutrition, lodging & boarding facilities, free of cost." },
          { year: "1985", title: "Hospital for the Differently Abled", img: Journey3, desc: "The first hospital for polio patients was established, providing treatments to the differently abled." },
          { year: "2001", title: "Vocational Training Centre", img: Journey2, desc: "The differently abled & underprivileged are trained for the real world & its struggles." },
        ].map((journey, index) => (
          <div key={index} className="relative w-11/12 sm:w-1/2 md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
            <div className="p-5 text-center">
              <img className="w-full h-48 object-cover rounded-t-lg" src={journey.img} alt={journey.title} />
              <h2 className="text-xl font-bold mt-2">{journey.year}</h2>
              <h3 className="text-lg text-blue-700 font-semibold">{journey.title}</h3>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 text-white p-5 flex flex-col justify-center opacity-0 transition-opacity duration-500 hover:opacity-100">
              <h2 className="text-xl font-bold">{journey.year}</h2>
              <h3 className="text-lg font-semibold mb-2">{journey.title}</h3>
              <p className="text-sm">{journey.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <AboutJourney1/>
    </div>
  );
};

export default AboutJourney;
