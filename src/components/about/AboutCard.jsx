import React from 'react'
import healImage from "../../assets/aboutcrad1.webp";
import healImage1 from "../../assets/aboutcrad2.webp";
import healImage2 from "../../assets/aboutcrad3.webp";

const AboutCard = () => {
  return (
    <div className="text-center text-white border h-auto min-h-[50vh] p-12 w-full bg-cover bg-center" style={{ backgroundImage: "url('../../assets/aboutcrad4.webp')" }}>
      <h2 className="text-2xl md:text-3xl font-bold mb-6">WHAT WE DO</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <div className="bg-white text-[#1e1e50] p-6 rounded-lg text-center w-full max-w-[350px] shadow-lg flex flex-col items-center">
          <img src={healImage} alt="Heal" className="w-4/5 max-w-[250px] h-auto rounded-md" />
          <h3 className="mt-4 text-xl font-semibold">HEAL</h3>
        </div>
        <div className="bg-white text-[#1e1e50] p-6 rounded-lg text-center w-full max-w-[350px] shadow-lg flex flex-col items-center">
          <img src={healImage1} alt="Enrich" className="w-4/5 max-w-[250px] h-auto rounded-md" />
          <h3 className="mt-4 text-xl font-semibold">ENRICH</h3>
        </div>
        <div className="bg-white text-[#1e1e50] p-6 rounded-lg text-center w-full max-w-[350px] shadow-lg flex flex-col items-center">
          <img src={healImage2} alt="Empower" className="w-4/5 max-w-[250px] h-auto rounded-md" />
          <h3 className="mt-4 text-xl font-semibold">EMPOWER</h3>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
