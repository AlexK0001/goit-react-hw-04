import Modal from "react-modal";
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
    const { urls, alt_description, user, likes } = image;
  

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div>
        <img
          src={urls.regular}
          alt={alt_description}
        />
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
        <button onClick={onRequestClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;