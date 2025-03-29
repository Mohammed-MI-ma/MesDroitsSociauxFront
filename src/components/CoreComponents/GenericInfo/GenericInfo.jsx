import PropTypes from "prop-types";

const GenericInfo = ({ icon, text, modal, ref }) => {
  if (!icon || !text || !modal || !modal.id || !modal.title || !modal.body) {
    console.warn("Missing required props in GenericInfo component");
    return null;
  }

  // Use a cleaner approach for modal validation
  const handleValidate = async () => {
    try {
      const isValid = await ref.current?.validateForm();
      return isValid?.status ? isValid : { status: false };
    } catch (error) {
      console.error("Error during form validation", error);
      return { status: false, error };
    }
  };

  return {
    icon,
    text,
    primary: true,
    editing: true,
    modal: {
      id: modal.id,
      title: modal.title,
      body: modal.body,
      validate: handleValidate,
    },
  };
};

// PropTypes for prop validation
GenericInfo.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  modal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.node.isRequired,
  }).isRequired,
  ref: PropTypes.object.isRequired,
};

export default GenericInfo;
