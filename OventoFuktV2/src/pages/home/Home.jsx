import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Services from "../../components/CompanysServices/Services";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Services />
    </div>
  );
};

export default Home;
