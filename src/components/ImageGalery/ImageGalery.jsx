import { Component } from 'react';
import ImageItem from './ImageItem';
import PropTypes from 'prop-types';

class ImageGalery extends Component {
  state = {};
  render() {
    return (
      <ul className="gallery">
        {this.props.items.map(item => (
          <ImageItem
            handlerImageClick={this.props.handlerImageClick}
            key={item.id}
            largeImageURL={item.largeImageURL}
            previewImage={item.webformatURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGalery;

ImageGalery.propTypes = {
  handlerImageClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};