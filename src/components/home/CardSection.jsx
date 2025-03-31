import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Bal Bhavan",
    image:
      "https://media.istockphoto.com/id/870402320/photo/a-social-worker-meeting-with-a-group-of-villagers.jpg?s=612x612&w=0&k=20&c=2JlS1vqg4pU5lCp8oiFXjVgMPlHbhrmH4wmtRJdq384=",
    description:
      "We provide skill training and support systems to help women gain independence and improve their quality of life through community-led initiatives and education.",
  },
  {
    title: "Women Digital Music",
    image:
      "https://www.shutterstock.com/image-illustration/raised-hands-volunteer-people-holding-260nw-2364767611.jpg",
    description:
      "Our programs offer free tutoring, school supplies, and safe learning spaces to ensure every child has the chance to grow and succeed.",
  },
  {
    title: "Kalpavruksha",
    image:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsb2ZmaWNlMTFfY3JlYXRpdmVfcG9zdGVyX2Rlc2lnbl93aXRoX3R3b19pbnRlcnNlY3RpbmdfaF9lZmRiNjA0OS05MmViLTRkODctYjJiYi1hNzJmNTRiZDFmM2VfMS5qcGc.jpg",
    description:
      "Regular medical camps, nutritious meals, and hygiene awareness campaigns help improve community health, especially in rural and underprivileged areas.",
  },
];

const CardSection = () => {
  const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <section className="py-12 bg-gray-50 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Our Focus Areas
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {truncateWords(card.description, 20)}
              </p>
              <Link
                to="/about"
                className="inline-block px-4 py-2 text-sm bg-orange-500 text-white rounded-full"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
