import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`shadow-md sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transperent text-white" : "text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">🌱 NGO</Link>
          </div>

          {/* Hamburger for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-inherit focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLinks t={t} isScrolled={isScrolled} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-4">
            <NavLinks t={t} isScrolled={isScrolled} />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLinks({ t, isScrolled }) {
  const linkStyle = isScrolled
    ? "hover:text-black font-medium text-orange-500"
    : "hover:text-black font-medium text-black";

  return (
    <>
      <Link to="/" className={linkStyle}>
        {t("home")}
      </Link>
      <Link to="/about" className={linkStyle}>
        {t("about")}
      </Link>
      <Link to="/social-work" className={linkStyle}>
        {t("socialWork")}
      </Link>
      <Link to="/gallery" className={linkStyle}>
        {t("gallery")}
      </Link>
      <Link to="/bal-bhavan" className={linkStyle}>
        {t("balBhavan")}
      </Link>
      <Link to="/women-digital-music" className={linkStyle}>
        {t("womenDigitalMusic")}
      </Link>
      <Link to="/kalpavruksha" className={linkStyle}>
        {t("kalpavruksha")}
      </Link>
      <Link to="/contact-us" className={linkStyle}>
        {t("contactUs")}
      </Link>

      {/* Stylish Donation Button */}
      <Link
        to="/donation"
        className="bg-orange-500 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-orange-600 transition duration-300"
      >
        {t("Donation")}
      </Link>
    </>
  );
}

export default Navbar;
