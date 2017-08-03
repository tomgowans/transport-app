import React, { Component } from 'react';
import tflConfig from './../../config/auth';


class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autocomplete: ''
    }
  }

  getLocation(e) {
    e.preventDefault();

    window.location = `/search/${ this.findStopInput.value }`;
  }

  autocomplete(event) {
    const inputValue = this.findStopInput.value;

    if ( inputValue.length >= 2 ) {
      let apiEndpoint = `https://api.tfl.gov.uk/StopPoint/Search/${ inputValue }?includeHubs=false&app_id=${ tflConfig.tflConfig.appId }&app_key=${ tflConfig.tflConfig.appKey }`,
          searchItems = [];

      fetch(apiEndpoint)
      .then((res) => {
        return res.json();
      }).then((json) => {
        let matches = json.matches;

        if (matches.length > 0) {
          matches.forEach((child) => {
            searchItems.push([
              child
            ]);
          });

          this.setState({
            autocomplete: searchItems
          });

        } else {
          console.log("No results yet...");
        }

      });
    }
  }

  suggestion(name, i) {
    let stop = name[0];

    return(
      <li key={ i } onClick={ (e) => this.suggestionClick(e, stop.id ) }>{ stop.name }</li>
    )
  }

  suggestionClick(event, stopId) {

    window.location = `/stop/${stopId}`;
  }

  render () {
    // let autocompleteSuggestions = [],
    //     completeSuggestions = this.state.autocomplete;
    //
    // if ( this.state.autocomplete ) {
    //   autocompleteSuggestions = completeSuggestions.map( (data, i) => this.suggestion( data, i ) );
    // }

    // <div className="autocomplete-field">
    //   <input type="text" name="searchLocation" className="text-field" ref={ (input) => { this.findStopInput = input; }} onChange={ (event) => this.autocomplete(event) } placeholder="Stop name" />
    //   <ul className="autocomplete-list">{ autocompleteSuggestions }</ul>
    // </div>

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
