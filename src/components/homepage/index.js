import React, { Component } from 'react';

// import './App.css';

import SearchForm from './../search/SearchForm';

import RouteForm from './../routeplanner/RouteForm';


// import GeoButton from './../search/GeoButton';

// <GeoButton /> - TODO: Put back in when location API works


class Homepage extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />

        <RouteForm />
      </div>
    );
  }
}

export default Homepage;
