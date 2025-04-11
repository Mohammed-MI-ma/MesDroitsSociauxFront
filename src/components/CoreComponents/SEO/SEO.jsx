import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useContext, useEffect } from "react";
import LanguageContext from "../../../LanguageContext";

const SEO = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  // Meta Data for different pages (Add more pages as necessary)
  const metaData = {
    "/": {
      title: t("seo.LandingPage"),
      description: t("seo.descriptionLandingPage"),
      keywords: t("seo.keywordsLandingPage"),
      image: "https://www.weconnectmaroc.com/images/landing-page-image.png", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: `https://www.weconnectmaroc.com/${language}`,
        name: t("seo.LandingPage"),
        description: t("seo.descriptionLandingPage"),
        sameAs: ["https://x.com/WMaroc2025"],
      },
    },
    [`/${language}/votre-simulateur/simu-foyer`]: {
      title: t("seo.SimulateurFoyer"),
      description: t("seo.descriptionSimulateurFoyer"),
      keywords: t("seo.keywordsSimulateurFoyer"),
      image:
        "https://weconnectmaroc.com/assets/images/simulateur-foyer-image.png", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: `https://www.weconnectmaroc.com/${language}/votre-simulateur/simu-foyer`,
        name: t("seo.SimulateurFoyer"),
        description: t("seo.descriptionSimulateurFoyer"),
      },
    },
    [`/${language}/votre-simulateur/accueil/Preparez_vos_infos`]: {
      title: t("seo.PreparezVosInfos"),
      description: t("seo.descriptionPreparezVosInfos"),
      keywords: t("seo.keywordsPreparezVosInfos"),
      image:
        "https://weconnectmaroc.com/assets/images/preparez-vos-infos-image.png", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: `https://www.weconnectmaroc.com/${language}/votre-simulateur/accueil/Preparez_vos_infos`,
        name: t("seo.PreparezVosInfos"),
        description: t("seo.descriptionPreparezVosInfos"),
      },
    },
    "/about": {
      title: t("seo.AboutPage"),
      description: t("seo.descriptionAboutPage"),
      keywords: t("seo.keywordsAboutPage"),
      image: "https://weconnectmaroc.com/assets/images/about-page-image.png", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: `https://www.weconnectmaroc.com/${language}/about`,
        name: t("seo.AboutPage"),
        description: t("seo.descriptionAboutPage"),
      },
    },
    [`/${language}/droits-sociaux/Vosservices`]: {
      title: t("seo.VosServices"),
      description: t("seo.descriptionVosServices"),
      keywords: t("seo.keywordsVosServices"),
      image:
        "https://weconnectmaroc.com/assets/images/services-page-image.webp", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: `https://www.weconnectmaroc.com/${language}/droits-sociaux/vosservices`,
        name: t("seo.VosServices"),
        description: t("seo.descriptionVosServices"),
      },
    },
    [`/${language}/maroc-connect/connexion`]: {
      title: t("seo.LoginPage"),
      description: t("seo.descriptionLoginPage"),
      keywords: t("seo.keywordsLoginPage"),
      image: "https://weconnectmaroc.com/assets/images/login-page-image.png", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: `https://www.weconnectmaroc.com/${language}/maroc-connect/connexion`,
        name: t("seo.LoginPage"),
        description: t("seo.descriptionLoginPage"),
      },
    },
    [`/${language}/votre-simulateur/accueil`]: {
      title: t("seo.SimulateurAccueil"),
      description: t("seo.descriptionSimulateurAccueil"),
      keywords: t("seo.keywordsSimulateurAccueil"),
      image:
        "https://weconnectmaroc.com/assets/images/simulateur-page-image.png", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: `https://www.weconnectmaroc.com/${language}/votre-simulateur/accueil`,
        name: t("seo.SimulateurAccueil"),
        description: t("seo.descriptionSimulateurAccueil"),
      },
    },
  };

  // Default meta info for fallback
  const defaultMeta = {
    title: t("seo.LandingPage"),
    description: t("seo.descriptionLandingPage"),
    keywords: t("seo.keywordsLandingPage"),
    image: "https://www.weconnectmaroc.com/images/landing-page-image.png",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: `https://www.weconnectmaroc.com/${language}`,
      name: t("seo.LandingPage"),
      description: t("seo.descriptionLandingPage"),
    },
  };

  const meta = metaData[location.pathname] || defaultMeta;

  useEffect(() => {
    document.title = meta.title;
  }, [meta.title]);

  return (
    <>
      <Helmet>
        {/* Meta Tags */}
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ABOUTALHA MOHAMMED" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={meta.image} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        {/* Canonical Link */}
        <link rel="canonical" href={window.location.href} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(meta.structuredData)}
        </script>

        {/* Sitemap */}
        <link rel="sitemap" href="/sitemap.xml" />
      </Helmet>
    </>
  );
};

export default SEO;
