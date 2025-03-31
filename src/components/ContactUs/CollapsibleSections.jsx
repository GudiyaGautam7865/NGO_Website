import React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const sections = [
  {
    title: "PARTNERSHIP SUPPORT",
    content: (
        <div>
          <p className="text-2xl"><strong>NGO PARTNERSHIPS:</strong> Write to Samuel at ngo.partnership@smilefoundationindia.org
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusantium vel? Adipisci nulla nam necessitatibus numquam vel dicta? Quas numquam dicta eaque voluptas similique repudiandae consequuntur libero necessitatibus labore repellendus.</p>
          </p>
          <p className="text-xl m-1"><strong>Education:</strong> Write to Gargi at me@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Healthcare:</strong> Write to Satnam at health@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Capacity Development:</strong> ctg-india@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Livelihood:</strong> Write to Bipasha at step@smilefoundationindia.org</p>
          < p className="text-xl m-1"><strong>Community Engagement:</strong> Write to Seema at swabhiman@smilefoundationindia.org</p>
        </div>
      ),
  },
  {
    title: "COMMUNICATION RELATED ASSOCIATIONS",
    content: (
        <div>
          <p><strong>NGO PARTNERSHIPS:</strong> Write to Samuel at ngo.partnership@smilefoundationindia.org
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusantium vel? Adipisci nulla nam necessitatibus numquam vel dicta? Quas numquam dicta eaque voluptas similique repudiandae consequuntur libero necessitatibus labore repellendus.</p>
          </p>
          <p className="text-xl m-1" ><strong>Education:</strong> Write to Gargi at me@smilefoundationindia.org</p>
          <p className="text-xl m-1" ><strong>Healthcare:</strong> Write to Satnam at health@smilefoundationindia.org</p>
          <p className="text-xl m-1" ><strong>Capacity Development:</strong> ctg-india@smilefoundationindia.org</p>
          <p  className="text-xl m-1"><strong>Livelihood:</strong> Write to Bipasha at step@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Community Engagement:</strong> Write to Seema at swabhiman@smilefoundationindia.org</p>
        </div>
      ),
  },
  {
    title: "PROGRAMME RELATED QUERIES",
    content: (
      <div>
        <p><strong>NGO PARTNERSHIPS:</strong> Write to Samuel at ngo.partnership@smilefoundationindia.org
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusantium vel? Adipisci nulla nam necessitatibus numquam vel dicta? Quas numquam dicta eaque voluptas similique repudiandae consequuntur libero necessitatibus labore repellendus.</p>
        </p>
        <p className="text-xl m-1"><strong>Education:</strong> Write to Gargi at me@smilefoundationindia.org</p>
        <p className="text-xl m-1"><strong>Healthcare:</strong> Write to Satnam at health@smilefoundationindia.org</p>
        <p className="text-xl m-1"><strong>Capacity Development:</strong> ctg-india@smilefoundationindia.org</p>
        <p className="text-xl m-1"><strong>Livelihood:</strong> Write to Bipasha at step@smilefoundationindia.org</p>
        <p className="text-xl m-1"><strong>Community Engagement:</strong> Write to Seema at swabhiman@smilefoundationindia.org</p>
      </div>
    ),
  },
  {
    title: "VOLUNTEERING & JOBS",
    content: (
        <div>
          <p><strong>NGO PARTNERSHIPS:</strong> Write to Samuel at ngo.partnership@smilefoundationindia.org
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, accusantium vel? Adipisci nulla nam necessitatibus numquam vel dicta? Quas numquam dicta eaque voluptas similique repudiandae consequuntur libero necessitatibus labore repellendus.</p>
          </p>
          <p className="text-xl m-1"><strong>Education:</strong> Write to Gargi at me@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Healthcare:</strong> Write to Satnam at health@smilefoundationindia.org</p>
          < p className="text-xl m-1"><strong>Capacity Development:</strong> ctg-india@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Livelihood:</strong> Write to Bipasha at step@smilefoundationindia.org</p>
          <p className="text-xl m-1"><strong>Community Engagement:</strong> Write to Seema at swabhiman@smilefoundationindia.org</p>
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
    <div className=" m-5 mx-auto p-6 bg-gray-200  w-300 rounded-md shadow-lg">
      {sections.map((section, index) => (
        <div key={index} className="border-b py-3">
          <button
            onClick={() => toggleSection(index)}
            className="w-full flex justify-between items-center text-lg font-bold text-gray-800 focus:outline-none"
          >
            {section.title}
            {openIndex === index ? (
              <Minus className="w-5 h-5 text-gray-600" />
            ) : (
              <Plus className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {openIndex === index && (
            <div className="mt-2 text-gray-700 text-sm">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
