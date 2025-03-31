import React, { useState } from "react";
import { motion } from "framer-motion";

const SocialWorkProtestBanner = () => {
  const [showCookie, setShowCookie] = useState(true);

  return (
    <div className="relative">
      {/* Banner Section */}
      <div className="relative h-[400px] flex items-center justify-center ">
        {/* Background Image */}
        <img
          src="https://www.socialworkers.org/Images/ChaptersHomepageBannerImages/www.socialworkers.org/ResistBanner.jpg"
          alt="Protest Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-40"></div>

        {/* Text Content */}
        <motion.div
          className="relative text-center text-white px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            NASW alarmed, outraged by Trump Administration policies
          </h1>
          <p className="mt-3 text-lg">
            Learn how these actions will hurt vulnerable populations and how Social Workers can take action
          </p>
          <motion.button
            className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Our resources
          </motion.button>
        </motion.div>
      </div>

      {/* Cookie Notice */}
      {showCookie && (
        <motion.div
          className="fixed bottom-0 w-full bg-black text-white text-center p-3 flex justify-between items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm">
            This website uses cookies to ensure you get the best experience on our website. By continuing to use our site, you accept our{" "}
            <span className="underline">Privacy Policy</span>.
          </p>
          <button
            className="ml-4 bg-gray-700 px-4 py-2 rounded hover:bg-gray-500 transition"
            onClick={() => setShowCookie(false)}
          >
            I accept
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SocialWorkProtestBanner;
