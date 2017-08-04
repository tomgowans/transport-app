import React, { Component } from 'react';

import RouteSummary from './RouteSummary';

import tflConfig from './../../config/auth';

import RouteForm from './RouteForm';

import './../../styles/routeplanner.css';
import './../../styles/singleRouteLegs.css';


class RouteOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      routePlannerFrom: '',
      routePlannerTo: '',
      routeplanner: ''
    }

    this.fetchRouteData();
  }

  fetchRouteData() {
    let apiEndpoint = `https://api.tfl.gov.uk/Journey/JourneyResults/${this.props.match.params.from}/to/${this.props.match.params.to}?app_id=${tflConfig.tflConfig.appId}&app_key=${tflConfig.tflConfig.appKey}`,
    listItems = [];

    fetch(apiEndpoint)
    .then((res) => {
      return res.json();
    }).then((json) => {
      let journeys = json.journeys;

      this.setState({
        routePlannerFrom: json.journeyVector.from,
        routePlannerTo: json.journeyVector.to
      });


      if (journeys !== undefined) {
        journeys.forEach((child) => {
          listItems.push([
            child
          ]);
        });

        this.setState({
          routeplanner: listItems
        });

      } else {
        console.log("No results yet...");
      }
    });

  }

  render() {
    const routesObj = this.state.routeplanner;
    let routeItems = '';

    routeItems = routesObj.length ? routeItems = routesObj.map((data, i) => <RouteSummary key={i} data={data[0]} /> ) : <li>Loading route options...</li>;

    return (
      <div className="routeplanner">
        <RouteForm from={ this.props.match.params.from } to={ this.props.match.params.to } />

        <ul>
          {routeItems}
        </ul>
      </div>
    )
  }
}

export default RouteOptions;
