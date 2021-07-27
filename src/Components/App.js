import React, { Component } from 'react';
import s from './App.module.css';
import { fetchImgs } from '../Api/Api';
import { CustomLoader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { MoreButton } from './Button/Button';

export class App extends Component {
  state = {
    inputValue: '',
    imgs: [],
    errors: null,
    loading: false,
    currentPage: 1,
  };

  componentDidMount() {
    const fetcher = async () => {
      try {
        const imgs = await fetchImgs();
        this.setState({ imgs: imgs.data.hits, loading: false });
      } catch (error) {
        this.setState({ errors: error.response.data, loading: false });
      }
    };
    fetcher();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const fetcher = async () => {
        try {
          this.state({ loading: true });
          const imgs = await fetchImgs(this.state.currentPage);
          this.setState({ imgs: imgs.data.hits, loading: false });
        } catch (error) {
          this.setState({ errors: error.response, loading: false });
        }
      };
      fetcher();
    }
  }

  formSubmit = data => {
    this.setState({ inputValue: data });
  };

  nextPage = event => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const { loading, errors, imgs } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmit} />
        {loading && <CustomLoader />}
        {errors ? <h2>{errors}</h2> : <ImageGallery imgs={imgs} />}
        <MoreButton nextPage={this.nextPage} />
      </div>
    );
  }
}
