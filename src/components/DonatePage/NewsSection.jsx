import React from "react";
import WithMaterilTable from "./withMaterilTable";

const newsArticles = [
  {
    title: "Why Animal Welfare is a Corporate and an individual...",
    date: "19 May 2023",
    source: "SOCIALSTORY",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbO48XWvh6fJc2Ma6voJlnkhktrdb2DVWtChGsbTFLVrRjdVAPI9_c_97CFMq8mDMlm9w&usqp=CAU", 
  },
];

const NewsSection = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
        <span className="text-red-500">give</span> in the news
      </h2>
      <p className="text-gray-600 mb-10 text-center">Some stories in the media featuring Give</p>

      {/* Responsive Flexbox for Layout */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
        {/* Image Section */}
        <div className="w-full md:w-2/5">
          {newsArticles.map((news, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>

        {/* Donation Section */}
        <div className="w-full md:w-3/5">
          <WithMaterilTable />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;