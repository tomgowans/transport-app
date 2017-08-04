import React, { Component } from 'react';


class SearchForm extends Component {
  getLocation(e) {
    e.preventDefault();

    window.location = `/search/${ this.findStopInput.value }`;
  }

  render () {
    return (
      <form onSubmit={ (e) => this.getLocation(e) } className="search-form">
        <h2>Find a stop</h2>

        <input type="text" name="searchLocation" className="text-field" ref={ (input) => { this.findStopInput = input; }} placeholder="Stop name" />
        <input type="submit" className="button-1" />
      </form>
    )
  }
}

export default SearchForm;
