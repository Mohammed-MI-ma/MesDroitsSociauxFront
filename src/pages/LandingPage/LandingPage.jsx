import React from "react";
import HeroSection from "../../components/RefinedComponents/HeroSection/HeroSection";
import AnnouncementBanner from "../../components/RefinedComponents/AnnouncementBanner/AnnouncementBanner";
import LatestUpdates from "../../components/RefinedComponents/LatestUpdates/LatestUpdates";
import ServicesContainer from "../../components/RefinedComponents/ServicesContainer/ServicesContainer";
import MobileTopNewsFeed from "../../components/RefinedComponents/MobileTopNewsFeed/MobileTopNewsFeed";
import SourcesOfInfos from "../../components/RefinedComponents/SourcesOfInfos/SourcesOfInfos";

const LandingPage = () => {
  return (
    <main style={{ flex: "1", minHeight: "calc(100vh - 200px)" }}>
      <MobileTopNewsFeed />
      <HeroSection />
      <AnnouncementBanner />
      <LatestUpdates />
      <ServicesContainer />
      <SourcesOfInfos />
    </main>
  );
};

export default LandingPage;
