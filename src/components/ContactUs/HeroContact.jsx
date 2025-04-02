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
    <section className="bg-yellow-300 py-16 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Left Side - "CONTACT" Heading */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 uppercase relative">
            CONTACT
            <span className="block w-16 h-1 bg-yellow-600 mt-2 mx-auto md:mx-0"></span>
          </h2>
        </div>

        {/* Right Side - Description */}
        <div className="w-full md:w-2/3">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed text-center md:text-left">
            <strong className="font-bold text-blue-900">Women in Music</strong> is an organization with a mission to advance the
            awareness, equality, diversity, heritage, opportunities, and cultural aspects
            of women in the musical arts through education, support, empowerment, and recognition.
          </p>
        </div>
      </div>
    </section>
  );
}
