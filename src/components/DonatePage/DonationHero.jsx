import React, { useState } from "react";

const images = [
  {
    text: "This Gudi Padwa, help Datta Bargaje shelter and care for 60 orphans with HIV",
    button: "Donate now",
    img: "https://cfstatic.give.do/5dc1f7c4-c8cf-40c2-839c-071555847a92.jpg"
  },
  {
    text: "Support education for underprivileged children",
    button: "Donate Monthly",
    img: "https://cfstatic.give.do/c0c915c2-3d5d-4374-ae25-8eb59bc0ebfc.png"
  }
];

export default function DonationHero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="w-full  h-[60] flex flex-col items-center">
   

      <div className="relative w-full h-100 max-w-8xl mt-6 overflow-hidden">
        <button onClick={prevSlide} className="absolute left-0 bg-white p-2 m-2 rounded-full shadow-md">&#10094;</button>
        <div className="flex w-full transition-transform duration-500 ease-in-out">
          {images.map((item, index) => (
            <div key={index} className={`w-full ${current === index ? 'block' : 'hidden'}`}>
              <img src={item.img} alt="Slide" className="w-full h-94 object-cover rounded-lg" />
              {/* <div className="p-4 bg-black text-white rounded-lg mt-2">
                <p className="text-lg">{item.text}</p>
                <button className="mt-2 px-4 py-2 bg-red-500 rounded-lg">{item.button}</button>
              </div> */}
            </div>
          ))}
        </div>
        <button onClick={nextSlide} className="absolute right-0 bg-white p-2 m-2 rounded-full shadow-md">&#10095;</button>
      </div>

      {/* <div className="text-center mt-6">
        <h2 className="text-2xl font-bold">Give Monthly</h2>
        <p className="text-gray-600">Create sustained impact. Support verified projects. Get regular updates. Save tax. Cancel anytime.</p>
      </div> */}
    </div>
  );
}