import PropTypes from 'prop-types';

const Button = ({ handlerLoadMore }) => {
  return (
    <button
      onClick={() => handlerLoadMore()}
      className="button-load-more"
      type="button"
    >
      Load more
    </button>
  );
};
export default Button;
Button.propTypes = {
  handlerLoadMore: PropTypes.func.isRequired,
};