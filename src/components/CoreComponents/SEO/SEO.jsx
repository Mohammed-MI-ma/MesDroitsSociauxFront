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
        "Mes Droits Sociaux est une application marocaine permettant aux citoyens de calculer leur Indice Socio-Économique (ISE) et d'évaluer leur éligibilité aux aides sociales. Obtenez un score personnalisé grâce à notre calculateur intuitif et précis."
      ),
      keywords: t(
        "Mes Droits Sociaux, Indice Socio-Économique, ISE, aides sociales, calculateur ISE, score socio-économique, citoyens marocains, éligibilité aides, services sociaux, calcul des droits sociaux"
      ),
    },
  };

  const defaultMeta = {
    title: t("seo.LandingPage"),
    description: t(
      "Mes Droits Sociaux est une application marocaine permettant aux citoyens de calculer leur Indice Socio-Économique (ISE) et d'évaluer leur éligibilité aux aides sociales. Obtenez un score personnalisé grâce à notre calculateur intuitif et précis."
    ),
    keywords: t(
      "Mes Droits Sociaux, Indice Socio-Économique, ISE, aides sociales, calculateur ISE, score socio-économique, citoyens marocains, éligibilité aides, services sociaux, calcul des droits sociaux"
    ),
  };

  const meta = metaData[location.pathname] || defaultMeta;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ABOUTALHA MOHAMMED" />
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
