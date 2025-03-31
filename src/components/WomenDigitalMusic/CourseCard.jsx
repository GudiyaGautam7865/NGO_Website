import React from "react";

const CourseCard = ({ image, tag, title, description, lessons, seats, years, price, rating }) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col m-5">
      <div className="relative w-full h-[200px] overflow-hidden">
        <img src={image} alt={title} className="w-[90%] h-full object-cover rounded-t-2xl mt-3" />
        <span className={`absolute top-3 right-0 bg-orange-500 text-white px-3 py-1 rounded-tr-xl rounded-bl-xl text-xs font-bold uppercase`}>{tag}</span>
      </div>
      <div className="p-5 flex flex-col justify-between flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex justify-between text-gray-500 text-sm mb-4">
          <span>{lessons} Lessons</span>
          <span>{seats} Seats</span>
          <span>{years} Years</span>
        </div>
        <div className="flex justify-between items-center font-bold text-base">
          <span className="text-green-600 text-lg">${price}</span>
          <span className="flex items-center text-yellow-500 text-sm">⭐ {rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

