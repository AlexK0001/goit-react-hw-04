import Modal from 'react-modal';
import { useEffect } from 'react';
Modal.setAppElement('#root');


export default function ImageModal({ isModalOpen, onClose, imageSrc }) {
    useEffect(() => {
        const handleEsc = (event) => {
          if (event.key === 'Escape') {
            onClose(); // закриваємо модальне вікно
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, [onClose]);
    return (
        <Modal isOpen={isModalOpen} onRequestClose={onClose}>
            isOpen && (
      <div className="modal" onClick={onClose}> 
        <img src={imageSrc} alt="" />
      </div>
    )
    <div className="modal" onClick={onClose}>
  <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    <img src={imageSrc} alt="" />
  </div>
</div>

        </Modal>
    );
}
