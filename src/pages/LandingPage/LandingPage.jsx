import React, { lazy, useState, useTransition, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import LazySection from "@/components/CoreComponents/LazySection/LazySection";
import Skeleton from "react-loading-skeleton";

// Lazy imports
const HeroSection = lazy(() =>
  import("@/components/RefinedComponents/HeroSection/HeroSection")
);
const AnnouncementBanner = lazy(() =>
  import("@/components/RefinedComponents/AnnouncementBanner/AnnouncementBanner")
);
const LatestUpdates = lazy(() =>
  import("@/components/RefinedComponents/LatestUpdates/LatestUpdates")
);
const ServicesContainer = lazy(() =>
  import("@/components/RefinedComponents/ServicesContainer/ServicesContainer")
);
const MobileTopNewsFeed = lazy(() =>
  import("@/components/RefinedComponents/MobileTopNewsFeed/MobileTopNewsFeed")
);
const BigScreensNewsFeed = lazy(() =>
  import("@/components/RefinedComponents/BigScreensNewsFeed/BigScreensNewsFeed")
);
import styles from "./LandingPage.module.css";
const LandingPage = () => {
  const options = { threshold: 1 };

  const [isPendingMobileTopNewsFeed, startTransitionMobileTopNewsFeed] =
    useTransition();
  const [isPendingUpdates, startTransitionUpdates] = useTransition();
  const [isPendingServices, startTransitionServices] = useTransition();

  const [refMobileTopNewsFeed, inViewMobileTopNewsFeed] = useInView(options);
  const [refUpdates, inViewUpdates] = useInView(options);
  const [refServices, inViewServices] = useInView(options);

  const [showMobileFeed, setShowMobileFeed] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);
  const [showServices, setShowServices] = useState(false);

  // To prevent multiple triggers for the same component visibility
  const [hasShownMobileFeed, setHasShownMobileFeed] = useState(false);
  const [hasShownUpdates, setHasShownUpdates] = useState(false);
  const [hasShownServices, setHasShownServices] = useState(false);

  useEffect(() => {
    if (inViewMobileTopNewsFeed && !hasShownMobileFeed) {
      startTransitionMobileTopNewsFeed(() => {
        setShowMobileFeed(true);
        setHasShownMobileFeed(true);
      });
    }
  }, [inViewMobileTopNewsFeed, hasShownMobileFeed]);

  useEffect(() => {
    if (inViewUpdates && !hasShownUpdates) {
      startTransitionUpdates(() => {
        setShowUpdates(true);
        setHasShownUpdates(true);
      });
    }
  }, [inViewUpdates, hasShownUpdates]);

  useEffect(() => {
    if (inViewServices && !hasShownServices) {
      startTransitionServices(() => {
        setShowServices(true);
        setHasShownServices(true);
      });
    }
  }, [inViewServices, hasShownServices]);

  return (
    <main className={styles.container}>
      <div
        ref={refMobileTopNewsFeed}
        className={styles.mobileTopNewsFeedWrapper}
      >
        <LazySection fallback={<Spin tip="Loading mobile news feed..." />}>
          {isPendingMobileTopNewsFeed || !showMobileFeed ? (
            <div className="w-full h-full min-h-[400px] mt-[100px]">
              <Skeleton
                style={{ height: "400px" }}
                baseColor="var(--color-text)"
                highlightColor="var(--color-primary)"
              />
            </div>
          ) : (
            <MobileTopNewsFeed
              id="mobile-top-news-feed"
              inView={inViewMobileTopNewsFeed}
            />
          )}
        </LazySection>
      </div>

      <HeroSection />

      <LazySection fallback="Loading big screen feed...">
        <BigScreensNewsFeed />
      </LazySection>

      <LazySection fallback="Loading announcements...">
        <AnnouncementBanner />
      </LazySection>

      <div ref={refUpdates} className="mb-20  min-h-[400px]">
        <LazySection fallback="Loading updates...">
          {showUpdates && <LatestUpdates id="updates" inView={inViewUpdates} />}
        </LazySection>
      </div>

      <div ref={refServices} className="mt-20  min-h-[400px]">
        <LazySection fallback="Loading services...">
          {showServices && (
            <ServicesContainer id="services" inView={inViewServices} />
          )}
        </LazySection>
      </div>
    </main>
  );
};

export default LandingPage;
