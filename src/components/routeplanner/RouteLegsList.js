import React, { Component } from 'react';
import MapWrapper from './MapWrapper';
import RouteLeg from './RouteLeg';

class RouteLegsList extends Component {
  render() {
    let legsObj = this.props.routeData.legs,
        routeLegs = '';

    if (legsObj.length) {
      routeLegs = legsObj.map((data, i) =>
        <RouteLeg key={i} data={data}/>
      );
    } else {
      routeLegs = <li>No route legs</li>;
    }

    return (
      <ul className="single-route-legs">
        <MapWrapper paths={ legsObj } />

        {routeLegs}
      </ul>
    )
  }
}

export default RouteLegsList;
