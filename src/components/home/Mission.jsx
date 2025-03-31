import React from "react";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-gray-100 text-center px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        {t("missionTitle") || "Our Mission"}
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-lg">
        To uplift and empower every individual through access to education, healthcare, and equal opportunities — ensuring no one is left behind in building a just and compassionate society.
      </p>
    </section>
  );
};

export default Mission;
