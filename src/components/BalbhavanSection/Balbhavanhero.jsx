import React from "react";
import { motion } from "framer-motion";

const BalbhavanHero = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-lg text-orange-600 font-bold uppercase mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          History
        </motion.h2>
        <motion.h1 
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Fr. Agnel Balbhavan
        </motion.h1>
        
        <motion.div 
          className="bg-purple-800 text-white p-6 md:p-8 rounded-lg flex flex-col md:flex-row gap-6 md:gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div 
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://i0.wp.com/allaboutbelgaum.com/content/uploads/2024/12/bal-bhavan-18699050837117309379.jpeg"
              alt="Fr. Agnel Balbhavan"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-2/3 space-y-4 text-sm leading-relaxed"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p>
              Fr. Agnel Balbhavan was founded on 9th June, 1957 in the Land’s End neighborhood
              of Bandra, a suburb of Mumbai, by late Rev. Fr. Conceicao Rodrigues, a member of
              The Society of the Missionaries of St. Francis Xavier, Pilar, Goa.
            </p>
            <p>
              The aim was to shelter and educate orphans and destitute children of all castes,
              creeds, and communities. The inception was anchored in ambitions like fostering love
              and understanding among the various communities of India.
            </p>
            <p>
              Today, Fr. Agnel Balbhavan has grown into established charitable and educational
              institutions across India, sheltering and nurturing about 800 orphans in various
              orphanages.
            </p>
            <p>
              We have guided the inmates of Balbhavan to carve their future. They have pursued
              professions such as technicians, carpenters, production engineers, and tradesmen in
              various fields.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BalbhavanHero;
