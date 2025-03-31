import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    title: "NASW Events Calendar",
    description: "Find social work events taking place around the nation.",
    link: "#",
  },
  {
    title: "Career Center Update",
    description: "Explore the newly enhanced JobLink designed to provide expert career advice and connect you with unique opportunities in social work.",
    link: "#",
  },
  {
    title: "Social Work in a Warming World",
    description: "Social Workers Have a Responsibility to Advocate for Healthy Living Conditions.",
    link: "#",
  },
  {
    title: "Insurance and Workplace FAQs",
    description: "Our Statements",
    link: "#",
  },
  {
    title: "Mass Deportation: Unjust and Harmful to the Nation",
    description: "Listen to the latest episode of Social Work Talks.",
    link: "#",
  },
];

const rightSideData = [
  {
    title: "The Rising Importance Of Social Workers On The Home Health Team",
    description: "They Ensure Caregivers and Patients Receive Resources and Support.",
    link: "#",
  },
  {
    title: "Essential Resources for Social Workers Engaging with Law Enforcement Agencies",
    description: "Interested in Social Work & Law Enforcement? See These Resources.",
    link: "#",
  },
  {
    title: "Dialogue, Dignity, and Democracy",
    description: "Elaine Miller-Karas MSW, LCSW, on Nurturing Humanity in Trying Times.",
    link: "#",
  },
  {
    title: "Trump’s executive orders are exacerbating the country’s mental health crisis",
    description: "Read NASW CEO Dr. Anthony Estreet’s Article on Salon.com.",
    link: "#",
  },
];

const HighlightsSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Highlights
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 shadow-md rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.link} className="text-blue-600 font-semibold text-lg hover:underline">
                  {item.title}
                </a>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Section */}
          <div className="space-y-4">
            {rightSideData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 shadow-md rounded-lg"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={item.link} className="text-blue-600 font-semibold text-lg hover:underline">
                  {item.title}
                </a>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6WaGwt6hK3l3y2KPcLoQ2zou-_YY0NghEOA&s"
              alt="MyNASW Community"
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              MyNASW: Your Online Member Community
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Connect with other members and share your knowledge at the online community exclusively for NASW members.
            </p>
            <a
              href="#"
              className="mt-4 inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Visit MyNASW
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;

