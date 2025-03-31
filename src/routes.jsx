import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";

import SocialWork from "./pages/SocialWork";
import Gallery from "./pages/Gallery";
import BalBhavan from "./pages/BalBhavan";
import WomenDigitalMusic from "./pages/WomenDigitalMusic";
import Kalpavruksha from "./pages/Kalpavruksha";
import ContactUs from "./pages/ContactUs";
import Donation from "./pages/Donation";
import AboutUs from "./pages/AboutUs";

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/social-work" element={<SocialWork />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/bal-bhavan" element={<BalBhavan />} />
      <Route path="/women-digital-music" element={<WomenDigitalMusic />} />
      <Route path="/kalpavruksha" element={<Kalpavruksha />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/donation" element={<Donation />} />
    </Routes>
  );
}

export default RoutesList;
