import React, { Component } from 'react';

class ModeEmoji extends Component {
  render () {

    let mode = this.props.mode,
        emoji = '';

    switch (mode) {
      case 'bus':
        emoji = <span role="img" aria-label="bus">🚌</span>
        break;
      case 'tube':
        emoji = <span role="img" aria-label="tube">🚇</span>
        break;
      case 'tram':
        emoji = <span role="img" aria-label="tram">🚋</span>
        break;
      case 'overground':
        emoji = <span role="img" aria-label="overground">🚂</span>
        break;
      case 'tflrail':
        emoji = <span role="img" aria-label="tflrail">🚉</span>
        break;
      case 'national-rail':
        emoji = <span role="img" aria-label="national-rail">🚄</span>
        break;
      case 'dlr':
        emoji = <span role="img" aria-label="dlr">🚈</span>
        break;
      case 'cable-car':
        emoji = <span role="img" aria-label="cable-car">🚠</span>
        break;
      case 'river-tour':
        emoji = <span role="img" aria-label="river-tour">⛵️</span>
        break;
      case 'river-bus':
        emoji = <span role="img" aria-label="river-bus">🚤</span>
        break;
      case 'international-rail':
        emoji = <span role="img" aria-label="international-rail">🚅</span>
        break;
      case 'walking':
        emoji = <span role="img" aria-label="walking">🚶‍♀️</span>
        break;
      default:
        emoji = <span>{ mode }</span>
    }

    return (
      emoji
    )
  }
}

export default ModeEmoji;
