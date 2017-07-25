import React, { Component } from 'react';

class SearchForm extends Component {
  getLocation(e) {
    e.preventDefault();

    const searchTerm = this.findStopInput.value;

    window.location = `/search/${searchTerm}`;
  }

  autocomplete(event) {
    console.log( "Input", this.findStopInput.value );
  }

  render () {
    return (
      <form onSubmit={ (e) => this.getLocation(e) } className="search-form">
        <h2>Find a stop</h2>
        <input type="text" name="searchLocation" className="text-field" ref={ (input) => { this.findStopInput = input; }} onChange={ (event) => this.autocomplete(event)  } />
        <input type="submit" className="button-1" />
      </form>
    )
  }
}

export default SearchForm;
