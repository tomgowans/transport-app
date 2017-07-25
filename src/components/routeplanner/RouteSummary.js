import React, { Component } from 'react';

import ModeEmoji from '../ModeEmoji';

import RouteLegsList from './RouteLegsList';


class RouteSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      legsOpen: false
    }
  }

  openLegs(event) {
    let legsStatus = true;

    if (this.state.legsOpen) {
      legsStatus = false;
    }

    this.setState({
      legsOpen: legsStatus
    });
  }

  render() {
    let routeData = this.props.data,
        legsObj = routeData.legs,
        miniLegs = '';

    if (legsObj.length) {
      miniLegs = legsObj.map((data, i) =>
        <ModeEmoji key={i} mode={data.mode.name} />
      );
    } else {
      miniLegs = <li>No route legs</li>;
    }

    let routeLegsListing,
        summaryStatusClass = '';

    if (this.state.legsOpen) {
      summaryStatusClass = 'summary-open';
      routeLegsListing = <RouteLegsList routeData={this.props.data} />
    }

    let routeSummaryStatus = `route-summary-wrapper ${summaryStatusClass}`;

    return (
      <li className={routeSummaryStatus}>
        <span className="route-summary" onClick={(e) => this.openLegs(e)}>
          <span className="route-summary-duration">{routeData.duration}<small>mins</small></span>
          <span className="route-summary-minilegs">{miniLegs}</span>
        </span>

        {routeLegsListing}
      </li>
    )
  }
}

export default RouteSummary;
