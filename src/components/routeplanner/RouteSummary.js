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
    let legsStatus = this.state.legsOpen ? false : true;

    this.setState({
      legsOpen: legsStatus
    });
  }

  render() {
    let routeData = this.props.data,
        legsObj = routeData.legs,
        miniLegs = '',
        routeLegsListing = this.state.legsOpen ? <RouteLegsList routeData={this.props.data} /> : '',
        routeSummaryStatus = this.state.legsOpen ? 'route-summary-wrapper summary-open' : 'route-summary-wrapper';

    miniLegs = legsObj.length ? miniLegs = legsObj.map((data, i) => <ModeEmoji key={i} mode={data.mode.name} /> ) : <li>No route legs</li>;

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
