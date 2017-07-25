import React, { Component } from 'react';

import './../../styles/Forms.css';


class RouteForm extends Component {
  formSubmit(event) {
    event.preventDefault();

    let fromValue = this.fromInput.value,
        toValue = this.toInput.value;

    window.location = `/route/${fromValue}/${toValue}`;
  }

  render() {
    console.log("Render RouteForm");

    return (
      <form id="routeplannerForm" className="search-form routeplanner-form" onSubmit={(e) => this.formSubmit(e) }>
        <h2>Routeplanner</h2>
        <input
          ref={ (input) => { this.fromInput = input; }}
          type="text"
          className="routeplanner-from text-field"
          name="from"
          placeholder="From"
          defaultValue={ this.props.from }
          required />

        <span className="routeplanner-arrow">➡</span>

        <input
          ref={ (input) => { this.toInput = input; }}
          type="text"
          className="routeplanner-to text-field"
          name="to"
          placeholder="To"
          defaultValue={ this.props.to }
          required />

        <input type="submit" value="Let's go!" className="button-1" />
      </form>
    )
  }
}

export default RouteForm;
