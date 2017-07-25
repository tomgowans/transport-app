import React, { Component } from 'react';

import { withGoogleMap, GoogleMap, Polyline } from 'react-google-maps';

import withScriptjs from 'react-google-maps/lib/async/withScriptjs';

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
  withGoogleMap(
    props => (
      <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={12}
        defaultCenter={{ lat: props.centre.lat, lng: props.centre.lng }}
      >
        {props.paths.map((path, i) => (
          <Polyline
            key={i}
            path={path.path}
            options={{
              strokeColor: path.colour,
              strokeWeight: 6,
              geodesic: true
            }}
          />
        ))}
      </GoogleMap>
    )
  )
);

class Map extends Component {
  // componentDidUpdate() {
  //   this._map.fitBounds(this._map )
  // }
  //
  handleMapMounted = (map) => {
    this._map = map;

    let startPoint = this.props.startPoint
    let endPoint = this.props.endPoint

    console.log("Map", this._map);
    console.log("startPoint", startPoint);
    console.log("endPoint", endPoint);
  }

  render() {
    return(
      <AsyncGettingStartedExampleGoogleMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA87Jhj40j883yEX6Unw-UpWa8aApWLoYc"
        loadingElement={
          <div style={{ height: `300px` }}>
            <p>Loading</p>
          </div>
        }
        containerElement={
          <div style={{ height: `300px` }} />
        }
        mapElement={
          <div style={{ height: `300px` }} />
        }
        paths={ this.props.paths }
        centre={ this.props.centre }
        onMapMounted={ this.handleMapMounted }
      />
    );
  }
}

export default Map;
