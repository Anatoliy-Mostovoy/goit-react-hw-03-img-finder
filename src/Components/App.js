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

  componentDidUpdate(prevProps, prevState) {
    const { inputValue } = this.state;

    if (prevState.inputValue !== inputValue) {
      this.fetcher();
    }
  }

  fetcher = async () => {
    const { inputValue, currentPage } = this.state;

    if (inputValue === '') {
      return;
    }

    try {
      this.setState({ loading: true });
      const imgs = await fetchImgs(inputValue, currentPage);
      this.setState(prevState => ({
        imgs: [...prevState.imgs, ...imgs.data.hits],
        currentPage: currentPage + 1,
        loading: false,
      }));

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    } catch (error) {
      this.setState({ errors: error.response.data, loading: false });
    }
  };

  formSubmit = data => {
    this.setState({ inputValue: data.trim(), currentPage: 1, imgs: [] });
  };

  render() {
    const { loading, errors, imgs } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmit} />

        {errors ? <h2>{errors}</h2> : <ImageGallery imgs={imgs} />}
        {loading && <CustomLoader />}
        {imgs.length > 0 && <MoreButton nextPage={this.fetcher} />}
      </div>
    );
  }
}
