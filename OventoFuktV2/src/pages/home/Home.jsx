import React from "react";
import HeroSection from "../../components/heroSection/HeroSection";
import Services from "../../components/companysServices/Services";
import "./Home.css";
// För att förbättra SEO och ge mer information om företaget, importerar vi komponenterna SEO och LocalBusinessSchema. Dessa komponenter används för att lägga till meta-taggar och strukturerad data på hemsidan, vilket kan hjälpa sökmotorer att bättre förstå innehållet och syftet med sidan.
import SEO from "../../components/SEO";
import LocalBusinessSchema from "../../components/LocalBusinessSchema";

const Home = () => {
  return (
    <main className="home page">
      <SEO
        title="Fuktmätning, avfuktning & utredningar - Ovento Fukt AB"
        description="Specialister på fukt och inomhusmiljö. Fuktmätning, avfuktning, utredningar, mikrobiell provtagning och statusbesiktning av badrum och kök. Begär offert."
        path="/"
      />
      <LocalBusinessSchema />

      <HeroSection />
      <Services />
    </main>
  );
};

export default Home;
