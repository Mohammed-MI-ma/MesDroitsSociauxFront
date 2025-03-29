import {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Input, DatePicker, Radio, Form } from "antd";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useSelector } from "react-redux";
import { findByRangCode } from "../../../../reducers/applicationService/applicationSlice";

const Others = forwardRef(({ member }, ref) => {
  const { t } = useTranslation();
  const reduxMember = useSelector((state) => findByRangCode(state, "Au")); // Fetch member from Redux
  const [form] = Form.useForm();

  // Ensure we use `member` if passed; fallback to Redux data
  const effectiveMember = member || reduxMember || {};

  const [formData, setFormData] = useState({
    prenom: effectiveMember.prenom || "",
    dateNaissance: effectiveMember.dateNaissance || "",
    sexe: effectiveMember.sexe || "",
  });

  const options = [
    { label: t("male"), value: "Homme" },
    { label: t("female"), value: "Femme" },
  ];

  // Sync state when `member` or `reduxMember` changes
  useEffect(() => {
    if (effectiveMember) {
      setFormData({
        prenom: effectiveMember.prenom || "",
        dateNaissance: effectiveMember.dateNaissance || "",
        sexe: effectiveMember.sexe || "",
      });

      // Update form fields dynamically
      form.setFieldsValue({
        prenom: effectiveMember.prenom,
        dateNaissance: effectiveMember.dateNaissance
          ? moment(effectiveMember.dateNaissance)
          : null,
        sexe: effectiveMember.sexe,
      });
    }
  }, [effectiveMember, form]);

  // Expose validateForm function to parent
  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      try {
        await form.validateFields();
        return { status: true, body: formData, rangCode: "Au" };
      } catch (error) {
        return { status: false, body: {}, error };
      }
    },
  }));

  const handleInputChange = useCallback(
    (field) => (event) => {
      const value = event?.target ? event.target.value : event;
      setFormData((prev) => ({ ...prev, [field]: value }));
      form.setFieldsValue({ [field]: value }); // Ensure form UI updates
    },
    [form]
  );

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
          value={formData.dateNaissance ? moment(formData.dateNaissance) : null}
          onChange={(date, dateString) =>
            handleInputChange("dateNaissance")(date)
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
