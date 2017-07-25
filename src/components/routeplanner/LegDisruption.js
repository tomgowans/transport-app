import React, { Component } from 'react';

class LegDisruption extends Component {
  render() {
    let icon;

    switch (this.props.data.category) {
      case "PlannedWork":
        icon = "👷‍♂️";
        break;
      case "RealTime":
        icon = "🚧";
        break;
      case "Crowding":
        icon = "👨‍👨‍👧‍👦";
        break;
      default:
        icon = "💁‍♂️";
    }

    return (
      <li>{icon} {this.props.data.description}</li>
    )
  }
}

export default LegDisruption;
