import React from "react";
import { motion } from "framer-motion";

const ProgressSection = () => {
  return (
    <section className="w-400  m-12  py-12 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        className="text-center text-2xl md:text-3xl font-bold text-purple-800 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Progress Of Fr. Agnel Balbhavan
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-center text-gray-600 mb-8 px-4 md:px-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        While the future of this country is dependent on Science and Technology, Balbhavan can claim legitimate pride in the fact that they have given a fillip to the progress of the country in their own humble way.
      </motion.p>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left Side - Text Content */}
        <motion.div
          className="w-full ml-10 md:w-1/2 space-y-4 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>➤ The institution imparts academic and technical education to them and to over 20,000 students at Primary, Secondary, Graduate, and Post-Graduate levels.</p>
          <p>➤ We have guided the inmates of Balbhavan to carve their future. They have now pursued different professions to become fully trained technicians, carpenters, production engineers, air conditioning experts, and tradesmen in various other fields.</p>
          <p>➤ Agnel Ashram has bloomed under the guidance of its fathers and now branched into full-fledged schools, industrial training centres, polytechnics, and engineering colleges.</p>
          <p>➤ Many of the former inmates of Balbhavan are living successful lives, settled in various countries across the globe.</p>
          <p>➤ The institution imparts academic and technical education to them and to over 20,000 students at Primary, Secondary, Graduate, and Post-Graduate levels.</p>
          <p>➤ We have guided the inmates of Balbhavan to carve their future. They have now pursued different professions to become fully trained technicians, carpenters, production engineers, air conditioning experts, and tradesmen in various other fields.</p>
          <p>➤ Agnel Ashram has bloomed under the guidance of its fathers and now branched into full-fledged schools, industrial training centres, polytechnics, and engineering colleges.</p>
          <p>➤ Many of the former inmates of Balbhavan are living successful lives, settled in various countries across the globe.</p>
          <p>➤ Its endeavour to build a strong foundation for our nation continues.</p>
          <p>➤ Its endeavour to build a strong foundation for our nation continues.</p>
        </motion.div>

        {/* Right Side - Images */}
        <motion.div
          className="grid grid-cols-2 gap-4 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_img_4.png"
            alt="Image 1"
            className="w-70  rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_img_3.png"
            alt="Image 2"
            className="w-50 mt-20 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_images_1.png"
            alt="Image 3"
            className="w-70 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_img_5.png"
            alt="Image 4"
            className="w-60 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressSection;
