import React, { Component } from 'react';

class GeoButton extends Component {
  getLocation() {
    navigator.geolocation.getCurrentPosition(this.locationRedirect);
  }

  locationRedirect(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;

    window.location = `/search-location/${ lat }/${ lng }`;
  }

  render() {
    if (navigator.geolocation) {
      return (
        <button onClick={ (e) => this.getLocation(e) }>Location search component</button>
      )
    } else {
      return ( null )
    }
  }
}


export default GeoButton;
