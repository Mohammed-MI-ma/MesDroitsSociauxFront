/* eslint-disable no-undef */
import {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useTranslation } from "react-i18next";
import { Form, Radio, Input, DatePicker } from "antd";
import moment from "moment";
import { useSelector } from "react-redux";
import { findByRangCode } from "../../../../reducers/applicationService/applicationSlice";

const Conjointe = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const conjoint = useSelector((state) => findByRangCode(state, "CJ"));

  // Default form state
  const [formData, setFormData] = useState({
    youLive: conjoint?.youLive || "",
    prenom: conjoint?.prenom || "",
    dateNaissance: conjoint?.dateNaissance || "",
    sexe: conjoint?.sexe || "",
  });
  const [form] = Form.useForm(); // Ant Design form instance

  const options = [
    { label: t("simu_foyer.step1.seul"), value: "seul" },
    { label: t("simu_foyer.step1.enCouple"), value: "enCouple" },
    { label: t("simu_foyer.step1.divorced"), value: "divorce" },
    { label: t("simu_foyer.step1.veuf"), value: "veuf" },
  ];

  // Sync formData when chefMenage changes
  useEffect(() => {
    if (conjoint) {
      // Set the form values using Ant Design's setFieldsValue method
      form.setFieldsValue({
        prenom: conjoint.prenom || "",
        dateNaissance: conjoint.dateNaissance
          ? moment(conjoint.dateNaissance)
          : "",
        sexe: conjoint.sexe || "",
        youLive: conjoint.youLive || "",
      });
    }
  }, [conjoint, form]);
  // Expose validateForm function to parent
  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      try {
        await form.validateFields();

        return { status: true, body: formData, rangCode: "CJ" };
      } catch (error) {
        console.log("error", error);
        return { status: false, body: {} };
      }
    },
  }));

  const handleInputChange = useCallback(
    (field) => (event) => {
      let value = event?.target ? event.target.value : event;

      setFormData((prev) => {
        if (
          field === "youLive" &&
          (value === "seul" || value === "veuf" || value === "divorce")
        ) {
          return {
            youLive: value,
            prenom: "skip2025",
            sexe: "skip2025",
            dateNaissance: "skip2025",
          };
        }

        return { ...prev, [field]: value };
      });
    },
    []
  );

  useEffect(() => {
    console.log("Form Data State:", formData);
  }, [formData]);

  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        label={t("simu_foyer.step1.Vousvivez")}
        name="youLive"
        rules={[{ required: true, message: t("please_select_an_option") }]}
      >
        <Radio.Group
          size="large"
          options={options}
          value={formData.youLive}
          onChange={handleInputChange("youLive")}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>

      {/* Conditionally render spouse info */}
      {formData.youLive === "enCouple" && (
        <fieldset className="styled-box">
          <legend>{t("simu_foyer.step1.InformationsConjoint")}</legend>

          <Form.Item
            label={t("first_name")}
            name="prenom"
            rules={[{ required: true, message: t("please_enter_first_name") }]}
          >
            <Input
              value={formData.prenom}
              onChange={handleInputChange("prenom")}
              allowClear
            />
          </Form.Item>

          <Form.Item
            label={t("date_of_birth")}
            name="dateNaissance"
            rules={[{ required: true, message: t("please_select_dob") }]}
          >
            <DatePicker
              allowClear
              value={
                formData.dateNaissance ? moment(formData.dateNaissance) : null
              }
              onChange={(date, dateString) =>
                handleInputChange("dateNaissance")(dateString)
              }
              style={{ width: "100%" }}
              placeholder={t("choose_dob")}
            />
          </Form.Item>

          <Form.Item
            label={t("gender")}
            name="sexe"
            rules={[{ required: true, message: t("please_select_gender") }]}
          >
            <Radio.Group
              options={[
                { label: t("simu_foyer.step1.Male"), value: "male" },
                { label: t("simu_foyer.step1.Female"), value: "female" },
              ]}
              value={formData.sexe}
              onChange={handleInputChange("sexe")}
              optionType="button"
              buttonStyle="solid"
            />
          </Form.Item>
        </fieldset>
      )}
    </Form>
  );
});

export default Conjointe;
