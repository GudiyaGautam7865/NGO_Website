import React from "react";
import { motion } from "framer-motion";



const ContactUsHero = () => {
  return (
    <>
  
    <div className=" w-350 mx-auto p-6  bg-white shadow-md rounded-lg text-center gap-5">
      {/* Contact Section */}
      <motion.div
        className="bg-blue-900 text-white p-6 rounded-lg mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
        <h2 className="text-3xl font-bold mb-2">CONTACT US</h2>
        <p className="text-lg font-semibold">📞 +91-7023509999</p>
        <p className="text-lg font-semibold">☎️ 0294-6622222</p>
        <p className="text-lg font-semibold">✉️ info@narayanseva.org</p>
      </motion.div>

  
            </div>
        </>
  );
};

export default ContactUsHero;
