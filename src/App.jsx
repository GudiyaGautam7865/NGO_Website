import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n"; // i18next config
import RoutesList from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Uncomment when Footer is ready
import BackgroundMedia from "./components/BackgroundMedia";

function App() {
  const { i18n } = useTranslation();

  const switchLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">

        {/* 🔹 Top Contact + Language Switcher */}
        <div className="bg-gray-100 px-4 py-2 flex flex-col md:flex-row justify-between items-center text-sm text-gray-700">
          {/* Left: Contact Info */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            <span>📞 +91-9876543210</span>
            <span>✉️ info@ngo.org</span>
          </div>

          {/* Right: Language Switcher */}
          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              onClick={() => switchLanguage("en")}
              className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
            >
              English
            </button>
            <button
              onClick={() => switchLanguage("mr")}
              className="bg-green-600 text-white px-3 py-1 rounded text-sm"
            >
              मराठी
            </button>
          </div>
        </div>

        {/* 🔹 Navbar */}
        <Navbar />

        {/* 🔹 Page Content */}
        <main className="flex-grow">
          <RoutesList />
        </main>

        {/* 🔹 Footer (Optional) */}
        <BackgroundMedia/>
        <Footer />

      </div>
    </Router>
  );
}

export default App;
