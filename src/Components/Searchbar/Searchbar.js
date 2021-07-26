import React, { Component } from 'react';
import s from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  handleInputChange = event => {
    const { value } = event.target;
    this.setState({ inputValue: value });
  };

  handleSubmit = event => {
    const { inputValue } = this.state;
    event.preventDefault();
    this.props.onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <div className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button className={s.SearchFormButton} type="submit"></button>
          <label>
            <input
              className={s.SearchFormInput}
              type="text"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
