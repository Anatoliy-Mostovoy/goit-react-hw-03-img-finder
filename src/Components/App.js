import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
export class App extends Component {
  state = { inputValue: '' };

  formSubmit = data => {
    this.setState({ inputValue: data });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.formSubmit} />
      </>
    );
  }
}
