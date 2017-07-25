import React, { Component } from 'react';

import tflConfig from './../../config/auth';

import CountDownItem from './countdownItem';


class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stops: {
        [this.props.stopPoint]: ''
      }
    }

    this.fetchCountdownData();

    setInterval(() => {
      this.fetchCountdownData();
    }, 15000)

  }

  fetchCountdownData() {
    console.log("Fetching data from TFL");

    // TODO: Make this refresh

    var apiEndpoint = `https://api.tfl.gov.uk/StopPoint/${this.props.stopPoint}/Arrivals?app_id=${tflConfig.tflConfig.appId}&app_key=${tflConfig.tflConfig.appKey}`,
        listItems = [];

    fetch(apiEndpoint)
    .then((res) => {
      return res.json();
    }).then((json) => {
      if (json.length > 0) {
        json.forEach((child) => {
          listItems.push([
            child
          ]);
        });

        this.setState({
          stops: {
            [this.props.stopPoint]: listItems
          }
        });

      } else {
        console.log("No results yet...");
      }

    });
  }

  render() {
    const listItems = this.state.stops[ this.props.stopPoint ];

    var countdownItems = '';

    if (listItems === undefined) {
      this.fetchCountdownData();
    } else if (listItems.length) {
      console.log("Render countdown items");

      var resortedList = listItems.sort(function(a, b) {

        var dateA = new Date(a[0].expectedArrival),
            dateB = new Date(b[0].expectedArrival);

        return dateA - dateB;
      });

      countdownItems = resortedList.map((data, i) =>
        <CountDownItem key={i} data={data} />
      );

    } else {
      countdownItems = <li>No live data from TFL on this location</li>;
    }

    return (
      <div>
        <p>Show data for {this.props.stopPoint}</p>

        <ul>
          {countdownItems}
        </ul>
      </div>
    )
  }
}

export default CountDown;
