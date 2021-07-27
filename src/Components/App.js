import React, { Component } from 'react';
import s from './App.module.css';
import { fetchImgs } from '../Api/Api';
import { CustomLoader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    inputValue: '',
    imgs: [],
    errors: null,
    loading: true,
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

  formSubmit = data => {
    this.setState({ inputValue: data });
  };

  render() {
    const { loading, errors, imgs } = this.state;
    return (
      <div className={s.App}>
        <Searchbar onSubmit={this.formSubmit} />
        {loading && <CustomLoader />}
        {errors ? <h2>{errors}</h2> : <ImageGallery imgs={imgs} />}
      </div>
    );
  }
}
