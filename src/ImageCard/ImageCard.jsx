export default function ImageCard({ image, onImageClick }) {
    return (
        <div onClick={() => onImageClick(image.largeImageURL)}>
            <img src={image.urls.small} alt={image.alt_description} />
        </div>
    );
}
