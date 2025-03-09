import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import LeaderboardSection from "./LeaderboardSection";
import LatestExamsSection from "./LatestExamsSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection/>
      <FeaturesSection/>
      <LeaderboardSection/>
      <LatestExamsSection/>
      <TestimonialsSection/>
      <Footer/>
    
    </div>
  );
};

export default Homepage;