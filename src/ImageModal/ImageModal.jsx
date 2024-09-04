import Modal from "react-modal";
import css from './ImageModal.module.css'

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
    const { largeImageURL, alt_description, user, likes } = image;
  

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div>
        <img
          src={largeImageURL}
          alt={alt_description}
        />
        <p>Author: {user.name}</p>
        <p>Likes: {likes}</p>
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;