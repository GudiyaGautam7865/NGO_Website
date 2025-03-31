import React from "react";
import { motion } from "framer-motion";

const resources = [
  { title: "An Hour with Private Practice - NASW Members only", link: "#" },
  { title: "Practice Standards & Guidelines", link: "#" },
  { title: "Specialty Practice Sections", link: "#" },
  { title: "NASW Research Library", link: "#" },
  { title: "Visit Practice >>", link: "#" },
];

const jobs = [
  {
    title: "Social Worker - New Grads Welcome!",
    description: "Come work as a Social Worker with Vancouver Coastal Health (VCH)...",
    link: "#",
  },
  {
    title: "Social Worker / APON Outreach Coordinator",
    description: "Position Overview: The YM & YWHA of Washington Heights and Inwood is seeking...",
    link: "#",
  },
  {
    title: "Licensed Therapist",
    description: "Indiana Licensed Therapist – Sign-On Bonus Available...",
    link: "#",
  },
];

const magazineArticles = [
  {
    title: "Cannabis: As Drug Becomes More Mainstream, Experts Sound the Alarm About its Dangers",
    link: "#",
  },
  {
    title: "Violence in Schools: Social Workers Need to be Part of the Change",
    link: "#",
  },
  {
    title: "Forensic Social Work: Specialization Overlaps With Many Areas of the Profession",
    link: "#",
  },
  {
    title: "NASW Prepares to Monitor and Act on Trump Administration's Policies",
    link: "#",
  },
  {
    title: "Read the full magazine issue >>",
    link: "#",
  },
];

const ResourceSection = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Member Resources */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Member Resources</h3>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a
                    href={item.link}
                    className="text-blue-600 hover:underline text-lg font-medium"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Jobs */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Jobs</h3>
            <ul className="space-y-4">
              {jobs.map((job, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href={job.link} className="text-blue-600 text-lg font-medium hover:underline">
                    {job.title}
                  </a>
                  <p className="text-gray-600 text-sm">{job.description}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 flex space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Search Jobs
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Post a Job
              </motion.button>
            </div>
          </motion.div>

          {/* Social Work Advocates Magazine */}
          <motion.div
            className="bg-white shadow-md p-6 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Social Work Advocates Magazine
            </h3>
            <ul className="space-y-3">
              {magazineArticles.map((article, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <a href={article.link} className="text-blue-600 text-lg font-medium hover:underline">
                    {article.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResourceSection;
