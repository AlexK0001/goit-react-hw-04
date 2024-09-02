import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Modal from 'react-modal';

export default function App() {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=PvjMb00TBZQMjBYGyHn64d4ju2tX37ge2hlt-_SJJqA`);
            const data = await response.json();
            setImages(prevImages => [...prevImages, ...data.results]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query) {
            fetchImages();
        }
    }, [query, page]);

    const handleSearchSubmit = (newQuery) => {
        setQuery(newQuery);
        setPage(1);
        setImages([]);
    };

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

  

    return (
        <div>
            <SearchBar onSubmit={handleSearchSubmit} />
            {error && <ErrorMessage message={error} />}
            <ImageGallery images={images} onImageClick={handleImageClick} />
            {loading && <Loader />}
            {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
            {isModalOpen && <ImageModal isOpen={isModalOpen} image={selectedImage} onClose={() => setIsModalOpen(false)} />}
            <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
>
  <h2>Image Preview</h2>
  <img src={images} alt="Large version" />
  <button onClick={() => setModalIsOpen(false)}>Close</button>
</Modal>

        </div>
    );
}
