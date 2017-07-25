import React, { Component } from 'react';

import tflConfig from './../../config/auth';

import SearchResults from './SearchResults';
import SearchForm from './SearchForm';


class SearchGeo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchLocations: ''
    }

    // this.fetchSearchData( this.props.match.params.lat, this.props.match.params.lng );
  }

  fetchSearchData(lat, lng) {
    console.log("Fetching search data from TFL", lat, lng);


// TODO: https://api.tfl.gov.uk/swagger/ui/index.html?url=/swagger/docs/v1#!/StopPoint/StopPoint_GetByGeoPoint

    var apiEndpoint = `https://api.tfl.gov.uk/StopPoint/?location.lat=${lat}&location.lon=${lng}&app_id=${tflConfig.tflConfig.appId}&app_key=${tflConfig.tflConfig.appKey}`,
        searchItems = [];

    fetch(apiEndpoint)
    .then((res) => {
      return res.json();
    }).then((json) => {
      var matches = json.matches;

      if (matches.length > 0) {
        matches.forEach((child) => {
          console.log(child);

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
    // this.props.match.params.lat
    // this.props.match.params.lng


    return (
      <div className="App">
        <SearchForm />

        <SearchResults searchResults={this.state.searchLocations} />
      </div>
    );
  }
}

export default SearchGeo;
