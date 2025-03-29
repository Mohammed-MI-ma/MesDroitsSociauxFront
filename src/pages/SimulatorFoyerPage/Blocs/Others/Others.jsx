import {
  useState,
  useCallback,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from "react";
import { Input, DatePicker, Radio, Form } from "antd";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useSelector } from "react-redux";
import { findByRangCode } from "../../../../reducers/applicationService/applicationSlice";

const Others = forwardRef(({ member }, ref) => {
  const { t } = useTranslation();
  const reduxMember = useSelector((state) => findByRangCode(state, "Au"));
  const [form] = Form.useForm();

  // Memoize effectiveMember to prevent unnecessary renders
  const effectiveMember = useMemo(
    () => member || reduxMember || {},
    [member, reduxMember]
  );

  const [formData, setFormData] = useState({
    prenom: effectiveMember.prenom || "",
    dateNaissance: effectiveMember.dateNaissance
      ? moment(effectiveMember.dateNaissance)
      : null,
    sexe: effectiveMember.sexe || "",
  });

  const options = [
    { label: t("male"), value: "Homme" },
    { label: t("female"), value: "Femme" },
  ];

  // Sync form state when `effectiveMember` changes
  useEffect(() => {
    setFormData({
      prenom: effectiveMember.prenom || "",
      dateNaissance: effectiveMember.dateNaissance
        ? moment(effectiveMember.dateNaissance)
        : null,
      sexe: effectiveMember.sexe || "",
    });

    // Update Ant Design form fields dynamically
    form.setFieldsValue({
      prenom: effectiveMember.prenom,
      dateNaissance: effectiveMember.dateNaissance
        ? moment(effectiveMember.dateNaissance)
        : null,
      sexe: effectiveMember.sexe,
    });
  }, [effectiveMember, form]);

  // Expose validateForm to parent
  useImperativeHandle(ref, () => ({
    validateForm: async () => {
      try {
        await form.validateFields();
        return {
          status: true,
          body: {
            ...formData,
            dateNaissance: formData.dateNaissance
              ? formData.dateNaissance.format("YYYY-MM-DD")
              : null,
          },
          rangCode: "Au",
        };
      } catch (error) {
        return { status: false, body: {}, error };
      }
    },
    resetForm: () => {
      form.resetFields(); // This will reset the form fields
      setFormData({ prenom: "", dateNaissance: null, sexe: "" }); // Reset local state
    },
  }));

  const handleInputChange = useCallback(
    (field) => (event) => {
      const value = event?.target ? event.target.value : event;
      setFormData((prev) => ({ ...prev, [field]: value }));
      form.setFieldsValue({ [field]: value });
    },
    [form]
  );

  return (
    <Form layout="vertical" form={form}>
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
          value={formData.dateNaissance}
          onChange={(date) => handleInputChange("dateNaissance")(date)}
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
