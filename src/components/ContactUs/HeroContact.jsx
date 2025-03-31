// import React from 'react'
// import hero from "../../assets/image.webp"  

// const HeroContact = () => {
//   return (
//         <div className="h-[-5px]" >
// <img className='h-150 w-full' src={hero} alt=""/>
//     </div> 
//   )
// }

// export default HeroContact


import React from "react";

export default function HeroContact() {
  return (
    <section className="bg-yellow-300 h-80 mt-3 relative py-16 px-8 flex items-center justify-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start">
        
        {/* Left Side - "CONTACT" Heading */}
        <div className="w-full md:w-1/3">
          <h2 className="text-5xl font-extrabold text-blue-900 uppercase relative">
            CONTACT
            <span className="block w-16 h-1 bg-yellow-600 mt-2"></span>
          </h2>
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-2/3 mt-6 md:mt-0">
          <p className="text-lg text-gray-900 leading-relaxed">
            <strong className="font-bold text-blue-900">Women in Music</strong> is an organization with a mission to advance the 
            awareness, equality, diversity, heritage, opportunities, and cultural aspects 
            of women in the musical arts through education, support, empowerment, and recognition.
          </p>
        </div>
      </div>
    </section>
  );
}
