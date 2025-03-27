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

const ChefMenage = forwardRef((props, ref) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    prenom: "",
    dateNaissance: "",
    sexe: "",
  });
  const [form] = Form.useForm(); // Form instance to handle validation

  const options = [
    { label: t("male"), value: "Homme" },
    { label: t("female"), value: "Femme" },
  ];

  // Expose validateForm function to parent
  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      try {
        console.log("gooood");

        await form.validateFields();

        return { status: true, body: formData }; // Validation passed
      } catch (error) {
        console.log("error", error);
        return { status: false, body: {} }; // Validation failed
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
    <Form layout="vertical" form={form}>
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

export default ChefMenage;
