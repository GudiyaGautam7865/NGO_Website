import React from "react";

const testimonials = [
  {
    name: "Asha Patil",
    quote: "Nexus NGO helped me get my daughter enrolled in school. I’m forever grateful!",
  },
  {
    name: "Ravi Jadhav",
    quote: "The medical camp changed our lives — we had no access before.",
  },
  {
    name: "Sneha Joshi",
    quote: "Volunteering here made me realize the power of community and kindness.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-white px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
        Testimonials
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-md bg-gray-50 text-center"
          >
            <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
            <h4 className="font-semibold text-gray-900">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
