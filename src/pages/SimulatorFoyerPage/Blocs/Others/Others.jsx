import {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Input, DatePicker, Radio, Modal, Form } from "antd";
import { useTranslation } from "react-i18next";
import moment from "moment"; // Add this import
import { useSelector } from "react-redux";
import { findByRangCode } from "../../../../reducers/applicationService/applicationSlice";

const Others = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const others = useSelector((state) => findByRangCode(state, "Au"));
  const [formData, setFormData] = useState({
    prenom: others?.prenom || "",
    dateNaissance: others?.dateNaissance || "",
    sexe: others?.sexe || "",
  });
  const [form] = Form.useForm(); // Form instance to handle validation

  const options = [
    { label: t("male"), value: "Homme" },
    { label: t("female"), value: "Femme" },
  ];

  // Sync formData when chefMenage changes
  useEffect(() => {
    if (others) {
      setFormData({
        prenom: others.prenom || "",
        dateNaissance: others.dateNaissance || "",
        sexe: others.sexe || "",
      });
    }
  }, [others]);

  // Expose validateForm function to parent
  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      try {
        await form.validateFields();
        return { status: true, body: formData, rangCode: "Au" }; // Validation passed
      } catch (error) {
        return { status: false, body: {}, error: error }; // Validation failed
      }
    },
  }));

  const handleInputChange = useCallback(
    (field) => (event) => {
      const value = event?.target ? event.target.value : event;
      setFormData((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  useEffect(() => {
    console.log("Form Data State:", formData);
  }, [formData]);

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{
        prenom: formData.prenom,
        dateNaissance: formData.dateNaissance
          ? moment(formData.dateNaissance)
          : null,
        sexe: formData.sexe,
      }}
    >
      <Form.Item
        label={t("first_name")}
        name="prenom"
        rules={[
          {
            required: true,
            message: t("please_enter_first_name"),
          },
        ]}
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
        rules={[
          {
            required: true,
            message: t("please_select_dob"),
          },
        ]}
      >
        <DatePicker
          allowClear
          value={formData.dateNaissance ? moment(formData.dateNaissance) : null}
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
        rules={[
          {
            required: true,
            message: t("please_select_gender"),
          },
        ]}
      >
        <Radio.Group
          options={options}
          value={formData.sexe}
          onChange={handleInputChange("sexe")}
          optionType="button"
          buttonStyle="solid"
        />
      </Form.Item>
    </Form>
  );
});

export default Others;
