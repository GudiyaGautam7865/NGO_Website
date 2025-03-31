import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center py-12 bg-white px-4 md:px-20">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          {t("about")} NGO
        </h2>
        <p className="text-gray-600 text-lg text-justify">
          We are [Your NGO Name], a non-profit organization dedicated to building a better future for underprivileged communities. Our mission is to empower individuals and families through impactful programs focused on education, healthcare, women's empowerment, and child development.
          <br /><br />
          At [Your NGO Name], we believe that every person deserves the opportunity to thrive. Our team works tirelessly to break the cycle of poverty and create sustainable change. We provide access to quality education, essential healthcare services, and resources that promote gender equality and child welfare.
          <br /><br />
          Through collaboration with local communities, government agencies, and other organizations, we strive to maximize our impact and foster a culture of empowerment. Our vision is a world where every individual has the tools and support needed to achieve their full potential.
          <br /><br />
          Join us in our mission to make a difference and create a brighter future for those in need.
        </p>
      </div>
    </section>
  );
};

export default About;
