import React, { Component } from 'react';

import LineBadge from './../LineBadge';

class CountDownItem extends Component {
  render() {
    const data = this.props.data[0];

    var minutes1 = data.timeToStation / 60,
        minutes = minutes1.toString().split(".")[0] + "mins";

    return(
      <li>
        <LineBadge id={data.lineId} name={data.lineName} />

        <span role="img" aria-label="destination">🏁</span> {data.destinationName}&nbsp;
        ⏱ {minutes}
      </li>
    )
  }
}

export default CountDownItem;
