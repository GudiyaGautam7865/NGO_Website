import React from "react";
import Journey8 from "../../assets/Journey8.webp";
import Journey7 from "../../assets/Journey7.webp";
import Journey6 from "../../assets/Journey6.webp";
import Journey5 from "../../assets/Journey5.webp";


const journeyData = [
  { year: "2008", title: "Padma Shree Award", img: Journey8, desc: "Our founding chairman, Hon. Kailash ji ‘Manav’, had the honour of receiving the Padma Shree Award." },
  { year: "2015", title: "Narayan Children Academy", img: Journey7, desc: "Free of cost, quality digital education for underprivileged children." },
  { year: "2017", title: "Divya Heroes", img: Journey6, desc: "Talent shows for the highly talented, differently abled individuals." },
  { year: "2020", title: "Corona Relief Campaigns", img: Journey5, desc: "Provision of free cooked meals, masks, sanitizers, and grocery kits for daily wage laborers." },
]

const AboutJourney1 = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10 mb-6">
      {journeyData.map((item, index) => (
        <div key={index} className="relative w-full max-w-xs bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <div className="p-4 text-center">
            <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110" />
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-gray-900">{item.year}</h2>
              <h3 className="text-lg font-semibold text-blue-700">{item.title}</h3>
            </div>
          </div>
          <div className="absolute inset-0 bg-blue-500 bg-opacity-90 flex flex-col justify-center items-center text-white text-center opacity-0 transition-opacity duration-500 hover:opacity-100 p-4 rounded-lg">
            <h2 className="text-xl font-bold">{item.year}</h2>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm mt-2">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutJourney1;
