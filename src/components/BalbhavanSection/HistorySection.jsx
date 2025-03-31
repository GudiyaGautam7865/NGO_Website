import React from "react";
import { motion } from "framer-motion";

const HistorySection = () => {
  const timeline = [
    { year: "2012", description: "Year 2012" },
    { year: "1957", description: "Year 1957" },
    { year: "1969", description: "Year 1969" },
    { year: "1979", description: "Year 1979" },
    { year: "1984", description: "Year 1984" },
  ];

  return (
    <section className="bg-white py-12 m-9 gap-4 px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <motion.img
          src="https://www.agnelashram.org/images/about/Balbhaavan/1957_Balbhavan_timeline.jpg"
          alt="Fr. Agnel Balbhavan"
          className="w-full md:w-1/3 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Text Section */}
        <motion.div
          className="md:w-1/3 text-gray-700"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-purple-800 text-2xl font-bold">Fr. Agnel Balbhavan</h2>
          <p className="text-orange-600 font-semibold mb-4">June 1957</p>
          <p>
            Fr. Agnel Balbhavan was founded on 9th of June, 1957, by late Rev. Fr. Conceicao Rodrigues, a member of The Society of the Missionaries of St. Francis Xavier Pilar, Goa.
          </p>
        </motion.div>

      {/* Timeline Section */}
      <motion.div
        className="mt-12 border-l-2 border-gray-300 pl-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        {timeline.map((item, index) => (
            <motion.div
            key={index}
            className="mb-6"
            whileHover={{ scale: 1.05 }}
            >
            <p className="text-gray-600">{item.year}</p>
            <p className="text-orange-500 font-medium">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
        </div>
    </section>
  );
};

export default HistorySection;
