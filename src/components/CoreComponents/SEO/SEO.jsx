// SEO.js
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect } from "react";
import LazyLoad from "react-lazyload"; // For lazy loading images

const SEO = () => {
  const location = useLocation();
  const { t } = useTranslation();

  // Meta Data for different pages (Add more pages as necessary)
  const metaData = {
    "/": {
      title: t("seo.LandingPage"),
      description: t(
        "Mes Droits Sociaux est une application marocaine permettant aux citoyens de calculer leur Indice Socio-Économique (ISE) et d'évaluer leur éligibilité aux aides sociales. Obtenez un score personnalisé grâce à notre calculateur intuitif et précis."
      ),
      keywords: t(
        "Mes Droits Sociaux, Indice Socio-Économique, ISE, aides sociales, calculateur ISE, score socio-économique, citoyens marocains, éligibilité aides, services sociaux, calcul des droits sociaux"
      ),
      image: "https://www.weconnectmaroc.com/images/landing-page-image.jpg", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.weconnectmaroc.com/",
        name: t("seo.LandingPage"),
        description: t(
          "Mes Droits Sociaux est une application marocaine permettant aux citoyens de calculer leur Indice Socio-Économique (ISE) et d'évaluer leur éligibilité aux aides sociales."
        ),
        sameAs: ["https://x.com/WMaroc2025"],
      },
    },
    "/about": {
      title: t("seo.AboutPage"),
      description: t(
        "Découvrez l'application qui aide les citoyens à mieux comprendre leurs droits sociaux."
      ),
      keywords: t("application, droits sociaux, citoyens, ISE, maroc"),
      image: "https://www.weconnectmaroc.com/images/about-page-image.jpg", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://www.weconnectmaroc.com/about",
        name: t("seo.AboutPage"),
        description: t(
          "Découvrez l'application qui aide les citoyens à mieux comprendre leurs droits sociaux."
        ),
      },
    },
    "/droits-sociaux/Vosservices": {
      title: t("seo.VosServices"),
      description: t(
        "Découvrez les services disponibles pour vous. Apprenez comment maximiser vos droits sociaux et accédez à une assistance dédiée pour mieux gérer vos démarches sociales."
      ),
      keywords: t(
        "droits sociaux, services sociaux, aide sociale, Maroc, services citoyens, assistance sociale, droits citoyens, vos services"
      ),
      image: "https://www.weconnectmaroc.com/images/vos-services-image.jpg", // Fallback image
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: "https://www.weconnectmaroc.com/droits-sociaux/vosservices",
        name: t("seo.VosServices"),
        description: t(
          "Découvrez les services disponibles pour vous. Apprenez comment maximiser vos droits sociaux et accédez à une assistance dédiée pour mieux gérer vos démarches sociales."
        ),
      },
    },
    // Add more pages here if needed
  };

  // Default meta info
  const defaultMeta = {
    title: t("seo.LandingPage"),
    description: t(
      "Mes Droits Sociaux est une application marocaine permettant aux citoyens de calculer leur Indice Socio-Économique (ISE) et d'évaluer leur éligibilité aux aides sociales."
    ),
    keywords: t(
      "Mes Droits Sociaux, Indice Socio-Économique, ISE, aides sociales, calculateur ISE, score socio-économique, citoyens marocains, éligibilité aides, services sociaux, calcul des droits sociaux"
    ),
    image: "https://www.weconnectmaroc.com/images/default-image.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://www.weconnectmaroc.com/",
      name: t("seo.LandingPage"),
      description: t(
        "Mes Droits Sociaux est une application marocaine permettant aux citoyens de calculer leur Indice Socio-Économique (ISE) et d'évaluer leur éligibilité aux aides sociales."
      ),
    },
  };

  const meta = metaData[location.pathname] || defaultMeta;

  useEffect(() => {
    document.title = meta.title;
  }, [meta.title]);

  // Lazy load images

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

      {/* Lazy load images */}
    </>
  );
};

export default SEO;
