import Modal from "react-modal";
import PropTypes from "prop-types";

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Shuffle Cards">
      <h2>You've reached the limit of reloads. Would you like to register?</h2>
      <button onClick={onConfirm}>Register</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmationModal; 