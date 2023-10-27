import { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', this.onEsc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.onEsc);
  };

  onEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.handlerCloseModal();
  };

  onOverlayClick = ({ target }) => {
    if (!target.classList.contains('overlay')) {
      return;
    }
    this.props.handlerCloseModal();
  };

  render() {
    return (
      <div className="overlay" onClick={this.onOverlayClick}>
        <div className="modal">
          <img className="image-original" src={this.props.selectedIMG} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  selectedIMG: PropTypes.string.isRequired,
  handlerCloseModal: PropTypes.func.isRequired,
};