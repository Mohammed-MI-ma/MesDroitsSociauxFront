import React from "react";
import { useTranslation } from "react-i18next";
import { formOptions } from "../../formOptionsConfig";

const RangQuestionnaire = ({ rangCode }) => {
  const { t } = useTranslation();

  const filteredOptions = formOptions.filter((opt) =>
    opt.rangCodes.includes(rangCode)
  );

  if (filteredOptions.length === 0) return null;

  return (
    <section className="mb-6">
      <ul className="pl-6 ">
        {filteredOptions.map(({ key, label }) => (
          <li>
            <Checkbox key={key} onChange={null}>
              {t(label)}
            </Checkbox>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RangQuestionnaire;
