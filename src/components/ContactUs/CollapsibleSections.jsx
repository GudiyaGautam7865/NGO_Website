import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const sections = [
  {
    title: "PARTNERSHIP SUPPORT",
    content: (
      <div className="text-gray-700 text-sm md:text-base">
        <p className="text-lg font-bold">NGO PARTNERSHIPS:</p>
        <p>Write to Samuel at ngo.partnership@smilefoundationindia.org</p>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <ul className="mt-2 space-y-1">
          <li><strong>Education:</strong> me@smilefoundationindia.org</li>
          <li><strong>Healthcare:</strong> health@smilefoundationindia.org</li>
          <li><strong>Capacity Development:</strong> ctg-india@smilefoundationindia.org</li>
          <li><strong>Livelihood:</strong> step@smilefoundationindia.org</li>
          <li><strong>Community Engagement:</strong> swabhiman@smilefoundationindia.org</li>
        </ul>
      </div>
    ),
  },
  {
    title: "COMMUNICATION RELATED ASSOCIATIONS",
    content: (
      <div className="text-gray-700 text-sm md:text-base">
        <p className="text-lg font-bold">NGO PARTNERSHIPS:</p>
        <p>Write to Samuel at ngo.partnership@smilefoundationindia.org</p>
        <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      </div>
    ),
  },
];

export default function CollapsibleSections() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto p-4 bg-gray-100 rounded-md shadow-lg max-w-3xl w-full">
      {sections.map((section, index) => (
        <div key={index} className="border-b py-3">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex justify-between items-center text-lg font-bold text-gray-800 focus:outline-none px-4 py-2"
          >
            {section.title}
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-gray-600" />
            ) : (
              <Plus className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-2 px-4 pb-3">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
