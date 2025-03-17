import React from "react";
import HeroSection from "../../components/RefinedComponents/HeroSection/HeroSection";
import AnnouncementBanner from "../../components/RefinedComponents/AnnouncementBanner/AnnouncementBanner";
import LatestUpdates from "../../components/RefinedComponents/LatestUpdates/LatestUpdates";
import ServicesContainer from "../../components/RefinedComponents/ServicesContainer/ServicesContainer";

const LandingPage = () => {
  return (
    <main style={{ flex: "1", minHeight: "300vh" }}>
      <HeroSection />
      <AnnouncementBanner />
      <LatestUpdates />
      <ServicesContainer />
    </main>
  );
};

export default LandingPage;
