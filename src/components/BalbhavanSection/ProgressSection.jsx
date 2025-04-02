import React from "react";


const ProgressSection = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <h2
        className="text-center text-2xl md:text-3xl font-bold text-purple-800 mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Progress Of Fr. Agnel Balbhavan
      </h2>

      {/* Subtitle */}
      <p
        className="text-center text-gray-600 mb-8 px-2 md:px-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        While the future of this country is dependent on Science and Technology, Balbhavan can claim legitimate pride in the fact that they have given a fillip to the progress of the country in their own humble way.
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Side - Text Content */}
        <div
          className="w-full md:w-1/2 space-y-4 text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>➤ The institution imparts academic and technical education to over 20,000 students at various levels.</p>
          <p>➤ We have guided the inmates of Balbhavan to carve their future in different professions like technicians, engineers, and tradesmen.</p>
          <p>➤ Agnel Ashram has expanded into schools, training centers, and colleges under strong leadership.</p>
          <p>➤ Many former inmates of Balbhavan have built successful lives across the globe.</p>
          <p>➤ The institution continues its mission to build a strong foundation for the nation.</p>
        </div>

        {/* Right Side - Images */}
        <div
          className="grid grid-cols-2 gap-4 w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_img_4.png"
            alt="Image 1"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_img_3.png"
            alt="Image 2"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_images_1.png"
            alt="Image 3"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
          <img
            src="https://www.agnelashram.org/images/about/Balbhaavan/Balbhaavan_img_5.png"
            alt="Image 4"
            className="w-full h-40 object-cover rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;