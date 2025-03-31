import React from "react";
import hopes1 from "../../assets/Hopes1.png";
import events1 from "../../assets/Events1.jpg";
import hopes from "../../assets/Hopes.png";

const AboutSection = ({ title, imageSrc, imagePosition }) => {
  return (
    <article className="max-w-screen-xl mx-auto my-8 p-4 rounded-lg flex flex-wrap items-center">
      <img
        className={`w-[600px] h-[400px] p-5 rounded-[60px] object-cover 
          ${imagePosition === "right" ? "ml-5 order-last" : "mr-5 order-first"}`}
        src={imageSrc}
        alt={title}
      />
      <section className="flex-1 p-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="mb-3">
          Change the imagePosition prop to "left" or "right" to switch the image and text position.
        </p>
        <p className="italic mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula justo at ligula posuere, 
          eget consectetur metus pharetra.
        </p>
        <p>Fill in more text to see the text wrap below the image.</p>
      </section>
    </article>
  );
};

const AboutArticle = () => {
  return (
    <div className="bg-blue-50 w-full py-10">
      {/* <h1 className="text-center font-medium  text-[50px]">Mission</h1> */}
      <AboutSection title="Mission" imageSrc={hopes1} imagePosition="right" />
{/* 
      <h1 className="text-center font-bold text-[50px]">Vision</h1> */}
      <AboutSection title="Vision" imageSrc={events1} imagePosition="left" />

      {/* <h1 className="text-center font-bold text-[50px]">Value</h1> */}
      <AboutSection title="Value" imageSrc={hopes} imagePosition="right" />
    </div>
  );
};

export default AboutArticle;
