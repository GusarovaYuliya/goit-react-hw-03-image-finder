import PropTypes from 'prop-types';

const ImageItem = ({ largeImageURL, previewImage, handlerImageClick }) => {
  return (
    <li className="gallery-item">
      <img
        onClick={handlerImageClick}
        className="image-galery-item"
        src={previewImage}
        data-original={largeImageURL}
        alt=""
      />
    </li>
  );
};

export default ImageItem;
ImageItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  handlerImageClick: PropTypes.func.isRequired,
};