import React, { Component } from 'react';
import AutocompleteField from '../AutocompleteField';

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

    let fromPlaceholder = this.props.from.length ? this.props.from : "From",
        toPlaceholder = this.props.to.length ? this.props.to : "To";

    return (
      <form id="routeplannerForm" className="search-form routeplanner-form" onSubmit={(e) => this.formSubmit(e) }>
        <h2>Routeplanner</h2>

        <AutocompleteField
          placeholder={ fromPlaceholder }
          inputName="from"
          inputClassnames="routeplanner-from text-field"
          inputRef={ (input) => { this.fromInput = input; } } />

        <span className="routeplanner-arrow">➡</span>

        <AutocompleteField
          placeholder={ toPlaceholder }
          inputName="to"
          inputClassnames="routeplanner-from text-field"
          inputRef={ (input) => { this.toInput = input; } } />

        <input type="submit" value="Let's go!" className="button-1" />
      </form>
    )
  }
}

export default RouteForm;
