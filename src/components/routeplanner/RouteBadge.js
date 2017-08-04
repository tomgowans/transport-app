import React, { Component } from 'react';

import './../../styles/LineBadges.css';


class RouteBadge extends Component {
  render() {
    let routeOptions = this.props.routeOptions,
        routeDirections = routeOptions.directions[0],
        modeId = this.props.modeId,
        routeName = routeOptions.lineIdentifier.name,
        badgeClass = `inline-badge badge-${routeOptions.lineIdentifier.id}`;

    if (this.props.appendRouteName) {

      switch (modeId) {
        case 'bus':
          routeName = routeOptions.name + " Bus";
          break;
        case 'national-rail':
          routeName = routeOptions.name + " Train";
          break;
        default:
          routeName = routeOptions.name;
      }

      badgeClass = `inline-badge badge-${this.props.badgeClass}`;
    }

    return (
      <span className="route-leg-summary-label">
        <span className={badgeClass}>{routeName}</span> to {routeDirections}
      </span>
    )
  }
}

export default RouteBadge;
