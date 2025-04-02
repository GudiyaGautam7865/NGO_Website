

import React from "react";


const HistorySection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20 flex flex-col items-center justify-center">
      {/* Introduction Section */}
      <div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-purple-800">Our History</h2>
        <p className="text-gray-600 mt-2">A journey through time showcasing key milestones.</p>
      </div>

      {/* Image & Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-6xl">
        <img
          src="https://www.agnelashram.org/images/about/Balbhaavan/1957_Balbhavan_timeline.jpg"
          alt="Fr. Agnel Balbhavan"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <div
          className="md:w-1/3 text-gray-700 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-purple-800 text-2xl font-bold">Fr. Agnel Balbhavan</h2>
          <p className="text-orange-600 font-semibold mb-4">June 1957</p>
          <p>
            Fr. Agnel Balbhavan was founded on 9th of June, 1957, by late Rev. Fr. Conceicao Rodrigues, a member of
            The Society of the Missionaries of St. Francis Xavier Pilar, Goa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
