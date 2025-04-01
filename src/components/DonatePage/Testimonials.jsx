import React from "react";

const testimonials = [
  {
    name: "Vinod Khosla",
    position: "khosla ventures",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    text: "People often wonder where the money would go. I can tell you, I started working with GiveIndia when the pandemic first broke. They validate them, it’s a very good, reliable organization. People should have confidence in giving.",
  },
  {
    name: "Priyanka Chopra",
    position: "Priyanka Chopra Jonas Foundation",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    text: "When Nick & I decided to start our #TogetherForIndia fundraiser for the COVID-19 crisis, we wanted a partner with experience. GiveIndia’s team of passionate professionals ensured aid was given where most needed.",
  },
  {
    name: "Dr. Devi Shetty",
    position: "Narayana Health",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    text: "There is a healthcare crisis looming and we must act fast to protect frontline workers. Doctors, nurses, and paramedics' safety is crucial. We are prioritizing healthcare funding through GiveIndia’s COVID Response fund.",
  },
  {
    name: "Sanjay Gupta",
    position: "Google",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    text: "GiveIndia was one of the first to understand the challenges we faced as a society. They mobilized enormous resources to support people in need—a commendable job.",
  },
  {
    name: "Robert Rosen",
    position: "Bill & Melinda Gates Foundation",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
    text: "GiveIndia’s pursuit of bringing trust, convenience, and choice for donors aligns with our goal of enabling more informed generosity by everyday givers.",
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Here’s what people say about <span className="text-red-500">give</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 text-left border border-gray-200"
          >
            <p className="text-gray-700 mb-4">{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
