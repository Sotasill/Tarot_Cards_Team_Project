import Modal from "react-modal";
import { useEffect } from "react";
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

Modal.setAppElement("#root");

const LanguageModal = ({ isOpen, onRequestClose }) => {
  const { i18n } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedLanguage = i18n.language;
    localStorage.setItem("language", selectedLanguage);
    onRequestClose();
  };

  useEffect(() => {
    if (!isOpen) {
      i18n.changeLanguage("en");
    }
  }, [isOpen, i18n]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Language"
    >
      <h2>Select Language</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="en"
            checked={i18n.language === "en"}
            onChange={() => i18n.changeLanguage("en")}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="uk"
            checked={i18n.language === "uk"}
            onChange={() => i18n.changeLanguage("uk")}
          />
          Українська
        </label>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

LanguageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default LanguageModal;
