import React, { Component } from 'react';
import Map from '../Map';

class MapWrapper extends Component {
  render() {
    const paths = this.props.paths;
    let parsedPaths = [];

    paths.forEach((data) => {
      let lineString = JSON.parse( data.path.lineString ),
          path = [],
          colour;

      lineString.forEach((pathData) => {
        let latLng = {
          lat: pathData[0],
          lng: pathData[1]
        };

        path.push(latLng);
      });

      if (data.mode.id === 'tube' || data.mode.id === 'tram') {
        switch (data.routeOptions[0].lineIdentifier.id) {
          case 'bakerloo':
            colour = "#894e24"
          break;
          case 'district':
            colour = "#007229"
          break;
          case 'central':
            colour = "#dc241f"
          break;
          case 'circle':
            colour = "#ffce00"
          break;
          case 'hammersmith-city':
            colour = "#d799af"
          break;
          case 'jubilee':
            colour = "#6a7278"
          break;
          case 'metropolitan':
            colour = "#751056"
          break;
          case 'northern':
            colour = "#000"
          break;
          case 'piccadilly':
            colour = "#0019a8"
          break;
          case 'victoria':
            colour = "#00a0e2"
          break;
          case 'waterloo-city':
            colour = "#76d0bd"
          break;
          case 'london-overground':
            colour = "#e86a10"
          break;
          case 'tfl-rail':
            colour = "#0019a8"
          break;
          case 'dlr':
            colour = "#00afad"
          break;
          case 'tram':
            colour = "#6c0"
          break;
          default:
            colour = 'red'
        }

      } else {
        switch (data.mode.id) {
          case 'walking':
            colour = "#000"
          break;
          case 'national-rail':
            colour = "green"
          break;
          case 'bus':
            colour = "red"
          break;
          case 'tram':
            colour = "light-green"
          break;
          default:
            colour = "red"
        }
      }

      let linePath = {
        colour: colour,
        path: path
      };

      parsedPaths.push(linePath);
    });

    let firstLatLng = parsedPaths[0].path[0],
        firstLat = firstLatLng.lat,
        firstLng = firstLatLng.lng,
        lastLatLng = parsedPaths[parsedPaths.length-1].path,
        lastLat = lastLatLng[lastLatLng.length-1].lat,
        lastLng = lastLatLng[lastLatLng.length-1].lng,
        centreLat = firstLat - ((firstLat - lastLat) / 2),
        centreLng = firstLng - ((firstLng - lastLng) / 2);

    return (
      <Map paths={parsedPaths}
        centre={{ lat: centreLat, lng: centreLng }}
        startPoint={firstLatLng}
        endPoint={lastLatLng}
      />
    )
  }
}


export default MapWrapper;
