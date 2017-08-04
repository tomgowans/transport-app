import React, { Component } from 'react';
import tflConfig from './../config/auth';

import './../styles/Autocomplete.css';

class AutocompleteField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launchOverlay: false,
      autocompletedName: '',
      autocompletedId: '',
      autocomplete: ''
    }
  }

  launchOverlay() {
    this.setState({
      launchOverlay: true
    });

    setTimeout(() => {
      this.findStopInput.focus();
    }, 0);
  }

  closeOverlay(event) {
    event.preventDefault();

    this.setState({
      launchOverlay: false
    });
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
      <li key={ i } onClick={ (e) => this.suggestionClick(e, stop.name, stop.name ) }>{ stop.name }</li>
    )
  }
  // <li key={ i } onClick={ (e) => this.suggestionClick(e, stop.topMostParentId, stop.name ) }>{ stop.name }</li>

  suggestionClick(event, stopId, stopName) {
    this.setState({
      autocompletedName: stopName,
      autocompletedId: stopId,
      launchOverlay: false
    });
  }


  render() {
    let textToDisplay = this.props.placeholder,
        stopId,
        overlayDisplay = 'none',
        autocompleteSuggestions = [],
        completeSuggestions = this.state.autocomplete;

    if (this.state.launchOverlay) {
      overlayDisplay = "block";
    } else {
      overlayDisplay = 'none';
    }

    if (this.state.autocompletedName.length && this.state.autocompletedId.length) {
      textToDisplay = this.state.autocompletedName;
      stopId = this.state.autocompletedId;
    }

    if ( this.state.autocomplete ) {
      autocompleteSuggestions = completeSuggestions.map( (data, i) => this.suggestion( data, i ) );
    }

    return (
      <div className="autocomplete-wrapper">
        <input type="hidden"
          name={ this.props.inputName }
          ref={ this.props.inputRef }
          defaultValue={ stopId } />

        <span
          onClick={ (e) => this.launchOverlay() }
          className={this.props.inputClassnames}>{ textToDisplay }</span>

        <div className="overlay" style={{ display: overlayDisplay }}>

          <button onClick={ (e) => this.closeOverlay(e) } aria-label="Close" className="closebutton">[&times;]</button>

          <input type="text" name="searchLocation" className="text-field" ref={ (input) => { this.findStopInput = input; }} onChange={ (event) => this.autocomplete(event) } placeholder="Stop name" tabIndex="0" />
          <ul className="autocomplete-list">{ autocompleteSuggestions }</ul>
        </div>
      </div>
    )
  }
}

export default AutocompleteField;
