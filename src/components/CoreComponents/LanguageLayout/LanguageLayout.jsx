// src/components/CoreComponents/LanguageLayout.jsx
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { i18n } from "../../../Utils/initializeI18n";

const LanguageLayout = () => {
  const { lang } = useParams(); // "fr" or "ar"
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // If unsupported language, redirect to default (fr)
    if (!["fr", "ar"].includes(lang)) {
      navigate(`/fr${location.pathname}`, { replace: true });
    }
  }, [lang, navigate]);

  return <Outlet />;
};

export default LanguageLayout;
