import Modal from 'react-modal';
Modal.setAppElement('#root');


export default function ImageModal({ isModalOpen, onClose, image }) {

    return (
        <Modal isOpen={isModalOpen} onRequestClose={onClose}>
            <img src={image.urls.regular} alt={image.alt_description} />
        </Modal>
    );
}
