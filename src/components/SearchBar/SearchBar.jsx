import { Component } from 'react';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    value: '',
    lastRequest: '',
  };

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() === '') {
      return Notify.failure('Please, write something');
    } else if (
      this.state.value.toLowerCase().trim() === this.state.lastRequest
    ) {
      return Notify.failure('This is current request');
    }

    this.setState({
      lastRequest: this.state.value.toLowerCase().trim(),
    });
    this.props.onSubmit(this.state.value.toLowerCase().trim());
    this.setState({
      value: '',
    });
  };

  //   this.props.onSubmit(this.state.value.toLowerCase().trim());
  //   this.setState({
  //     value: '',
  //     lastRequest: this.state.value.toLowerCase().trim(),
  //   });
  // };
  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="searchform-button">
            <span className="searchform-button-label">Search</span>
          </button>

          <input
            onChange={this.onChange}
            className="searchform-input"
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};





