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

  suggestionClick(event, stopId, stopName) {
    this.setState({
      autocompletedName: stopName,
      autocompletedId: stopId,
      launchOverlay: false
    });
  }


  render() {
    let textToDisplay = this.state.autocompletedName.length ? this.state.autocompletedName : this.props.placeholder,
        stopId = this.state.autocompletedId.length ? this.state.autocompletedId : '',
        overlayDisplay = this.state.launchOverlay ? "block" : 'none',
        completeSuggestions = this.state.autocomplete,
        autocompleteSuggestions = completeSuggestions ? completeSuggestions.map( (data, i) => this.suggestion( data, i ) ) : [];

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
