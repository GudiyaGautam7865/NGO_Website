import React from "react";
import { motion } from "framer-motion";

const BalbhavanHero = () => {
  return (
    <>
    <img className="w-400 items-center m-10 h-100 rounded-lg" src="data:image/jpeg;base64,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"/>
    <section className="bg-white w-420 py-12 px-6 md:px-16">
      <div className="max-w-6xl mr-80 mx-auto">
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
          className="bg-purple-800 w-350 mr-70 text-white p-8 rounded-lg  h-110 flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          >
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            >
            <img
              src="https://i0.wp.com/allaboutbelgaum.com/content/uploads/2024/12/bal-bhavan-18699050837117309379.jpeg"
              alt="Fr. Agnel Balbhavan"
              className="w-full  rounded-lg shadow-lg"
              />
          </motion.div>
          <motion.div 
            className="md:w-2/3 space-y-4 text-sm leading-relaxed"
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
              Fr. Agnel Balbhavan was founded on 9th June, 1957 in the Land’s End neighborhood
              of Bandra, a suburb of Mumbai, by late Rev. Fr. Conceicao Rodrigues, a member of
              The Society of the Missionaries of St. Francis Xavier, Pilar, Goa.
            </p>
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
              </>
  );
};

export default BalbhavanHero;
