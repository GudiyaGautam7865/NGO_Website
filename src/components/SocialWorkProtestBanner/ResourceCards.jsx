import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    image: "https://www.socialworkers.org/portals/0/Images/Homepage/Navcards/CompactWith12StatesPassed420x174.jpg",
    title: "Progress on Interstate Licensing Compact",
    linkText: "Get the latest updates",
    linkUrl: "#",
  },
  {
    image: "https://www.socialworkers.org/portals/0/Images/Homepage/Navcards/Tips&ToolsFinalNav.jpg",
    title: "Tips and Tools for Social Workers",
    linkText: "Get updates on topics social workers need to know now.",
    linkUrl: "#",
  },
  {
    image: "https://www.socialworkers.org/portals/0/Images/Homepage/Navcards/DetainedMigrantChild.jpg",
    title: "Navigating new Immigration Policies",
    linkText: "What school social workers should know",
    linkUrl: "#",
  },
];

const ResourceCards = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Resources
        </motion.h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>
                <a
                  href={card.linkUrl}
                  className="text-blue-600 mt-2 inline-block hover:underline"
                >
                  {card.linkText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCards;
