import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ModeEmoji from './../ModeEmoji';


class StopResult extends Component {
  render () {
    const data = this.props.data[0],
          modes = data.modes;

    var modesList = '';

    if ( modes.length ) {
      modesList = modes.map((data, i) => <ModeEmoji mode={ data } /> )
    }


    return (
      <li>
        <Link to={`/stop/${data.id}`}>
          {data.name} {modesList}
        </Link>
      </li>
    )
  }
}


class SearchResults extends Component {
  render () {
    const resultsList = this.props.searchResults;

    var searchResultItems = '';

    if (resultsList.length) {
      searchResultItems = resultsList.map((data, i) =>
        <StopResult key={i} data={data} />
      );

      return (
        <ul>
          {searchResultItems}
        </ul>
      )
    } else {
      return (
        <p>No Results</p>
      )
    }
  }
}

export default SearchResults
