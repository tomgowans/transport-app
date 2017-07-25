import React, { Component } from 'react';

import tflConfig from './../../config/auth';

import SearchResults from './SearchResults';
import SearchForm from './SearchForm';


class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchLocations: ''
    }

    this.fetchSearchData( this.props.match.params.terms );
  }

  fetchSearchData(term) {
    console.log("Fetching search data from TFL", term);

    var apiEndpoint = `https://api.tfl.gov.uk/StopPoint/Search/${term}?includeHubs=false&app_id=${tflConfig.tflConfig.appId}&app_key=${tflConfig.tflConfig.appKey}`,
        searchItems = [];

    fetch(apiEndpoint)
    .then((res) => {
      return res.json();
    }).then((json) => {
      var matches = json.matches;

      if (matches.length > 0) {
        matches.forEach((child) => {
          searchItems.push([
            child
          ]);
        });

        this.setState({
          searchLocations: searchItems
        });

      } else {
        console.log("No results yet...");
      }

    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm />

        <SearchResults searchResults={this.state.searchLocations} />
      </div>
    );
  }
}

export default Search;
