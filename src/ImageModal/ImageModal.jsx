import Modal from 'react-modal';

export default function ImageModal({ isModalOpen, onClose, image }) {
    Modal.setAppElement('#root');

    return (
        <Modal isOpen={isModalOpen} onRequestClose={onClose}>
            <img src={image.urls.regular} alt={image.alt_description} />
        </Modal>
    );
}
