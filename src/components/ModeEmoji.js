import React, { Component } from 'react';

class ModeEmoji extends Component {
  render () {

    var mode = this.props.mode;

    if (mode === 'bus') {
      return (
        <span role="img" aria-label="bus">🚌</span>
      )
    } else if (mode === 'tube') {
      return (
        <span role="img" aria-label="tube">🚇</span>
      )
    } else if (mode === 'tram') {
      return (
        <span role="img" aria-label="tram">🚋</span>
      )
    } else if (mode === 'overground') {
      return (
        <span role="img" aria-label="overground">🚂</span>
      )
    } else if (mode === 'tflrail') {
      return (
        <span role="img" aria-label="tflrail">🚉</span>
      )
    } else if (mode === 'national-rail') {
      return (
        <span role="img" aria-label="national-rail">🚄</span>
      )
    } else if (mode === 'dlr') {
      return (
        <span role="img" aria-label="dlr">🚈</span>
      )
    } else if (mode === 'cable-car') {
      return (
        <span role="img" aria-label="cable-car">🚠</span>
      )
    } else if (mode === 'river-tour') {
      return (
        <span role="img" aria-label="river-tour">⛵️</span>
      )
    } else if (mode === 'river-bus') {
      return (
        <span role="img" aria-label="river-bus">🚤</span>
      )
    } else if (mode === 'international-rail') {
      return (
        <span role="img" aria-label="international-rail">🚅</span>
      )
    } else if (mode === 'walking') {
      return (
        <span role="img" aria-label="walking">🚶‍♀️</span>
      )
    } else {
      return (
        <span>{ mode }</span>
      )
    }
  }
}

export default ModeEmoji;
