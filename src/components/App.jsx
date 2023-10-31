// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

// 39546203-6f24950b6bb132fcbecdbd78e - API ключ

import { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import ImageGalery from './ImageGalery/ImageGalery';
import Modal from './Modal/Modal';
import fetchPixabay from './services/pixabay';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchText: '',
    currentPage: 1,
    totalHits: 0,
    items: [],
    error: '',
    isLoading: false,
    isShowModal: false,
    selectedIMG: '',
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.searchText !== this.state.searchText ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.setState({ isLoading: true, items: [] });
      fetchPixabay(this.state.searchText, this.state.currentPage)
        .then(resp => {
          if (!resp.ok) {
            this.setState({
              error: 'Sorry, something not good',
            });
            throw new Error();
          }

          return resp.json();
        })
        .then(data => {
          if (data.totalHits === 0) {
            this.setState({ error: 'Sorry, nothing' });
            throw new Error();
          } else {
            this.setState({
              error: '',
              // items:
              //   prevState.currentPage === this.state.currentPage
              //     ? data.hits
              //     : [...prevState.items, ...data.hits],
              items:data.hits,
              totalHits: data.totalHits,
              isLoading: false,
            });
          }
        })
        .catch(err => console.log(err))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };

  handlerCloseModal = () => {
    this.setState({ isShowModal: false });
  };

  handlerImageClick = ({
    target: {
      dataset: { original },
    },
  }) => {
    this.setState({ isShowModal: true, selectedIMG: original });
  };

  handlerLoadMore = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  handlerSubmit = value => {
    // this.setState({ searchText: value, currentPage: 1, items: [], error: '' });
    this.setState({ searchText: value, currentPage: 1, error: '' });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handlerSubmit} />
        {this.state.isShowModal && (
          <Modal
            handlerCloseModal={this.handlerCloseModal}
            selectedIMG={this.state.selectedIMG}
          />
        )}
        {this.state.items.length > 0 && (
          <ImageGalery
            items={this.state.items}
            handlerImageClick={this.handlerImageClick}
          />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.items.length < this.state.totalHits &&
          !this.state.error &&
          !this.state.isLoading && (
            <Button handlerLoadMore={this.handlerLoadMore} />
          )}
        {this.state.error && <p className="error">{this.state.error}</p>}
      </>
    );
  }
}




