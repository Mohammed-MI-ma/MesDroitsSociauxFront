import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./CookiePreferenceFieldset.module.css";
import { Radio, Button } from "antd"; // Assuming you are using Ant Design components
import { useCookieConsent } from "../../../../CookieConsentContext";

const CookiePreferenceFieldset = ({
  title,
  description,
  service,
  siteLink,
  isVisible = true,
  isAllowed = false,

  reminder,
}) => {
  const { t } = useTranslation();
  const { cookiesConsent, saveConsent } = useCookieConsent();

  // Provide a fallback state for cookiesConsent
  const defaultConsent = cookiesConsent || {};

  // Set the default value based on the 'isAllowed' prop
  const defaultValue = isAllowed ? "a" : "b"; // 'a' is allowed, 'b' is denied

  // Handle consent change and prevent denying necessary cookies
  const handleConsentChange = (value) => {
    // Prevent refusal of necessary cookies
    if (service === "cookies.necessaryService" && value === "b") {
      return;
    }
    const updatedPreferences = { ...defaultConsent, [service]: value };
    saveConsent(updatedPreferences);
  };

  return (
    <fieldset style={{ marginBottom: "3rem" }}>
      <div className={styles.cookieDescriptionContainer}>
        <h4>{t(title)}</h4>
        <p>{t(description)}</p>
        <div className={styles.cookieFieldContainer}>
          <div className={styles.cookieFieldHeaderContainer}>
            <legend>{t(service)}</legend>
            {siteLink && (
              <Button size="small" type="link">
                {t(siteLink)}
              </Button>
            )}
          </div>
          {isVisible && (
            <div style={{ flex: 1 }}>
              <Radio.Group
                size="regular"
                block
                value={cookiesConsent?.[service] || defaultValue} // Always provide a fallback value
                onChange={(e) => handleConsentChange(e.target.value)}
              >
                <Radio.Button value="a">{t("cookies.allow")}</Radio.Button>
                <Radio.Button value="b">{t("cookies.deny")}</Radio.Button>
              </Radio.Group>
            </div>
          )}
        </div>
        {reminder && <p>{reminder}</p>}
      </div>
    </fieldset>
  );
};

export default CookiePreferenceFieldset;
