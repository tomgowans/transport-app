import React, { Component } from 'react';
import './../LineBadges.css';

class LineBadge extends Component {
  render() {
    return (
      <p className={this.props.id}>{ this.props.name }</p>
    )
  }
}

export default LineBadge;
