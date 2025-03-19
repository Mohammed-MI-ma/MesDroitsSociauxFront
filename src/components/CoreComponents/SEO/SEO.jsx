import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SEO = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const metaData = {
    "/": {
      title: t("seo.LandingPage"),
      description: t(
        "Welcome to BeomCare's landing page, your trusted partner for all men's and women's care."
      ),
      keywords:
        "haman barber shop, men's care, women's care, appointments, reservations, BeomCare",
      image: "https://www.beomcare.com/path/to/landing-page-image.jpg",
    },
  };

  const defaultMeta = {
    title: t("seo.LandingPage"),
    description: t("Your trusted partner for all men's and women's care."),
    keywords:
      "haman barber shop, men's care, women's care, appointments, reservations, BeomCare",
    image: "https://www.beomcare.com/path/to/default-image.jpg",
  };

  const meta = metaData[location.pathname] || defaultMeta;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="BeomCare" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={meta.image} />
      <link rel="canonical" href={window.location.href} />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2694509100930247"
        crossorigin="anonymous"
      ></script>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "BeomCare",
          url: window.location.href,
          logo: "https://www.beomcare.com/path/to/logo.jpg",
          sameAs: [
            "https://www.facebook.com/beomcare",
            "https://www.twitter.com/beomcare",
            "https://www.linkedin.com/company/beomcare",
            "https://www.instagram.com/beomcare",
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
