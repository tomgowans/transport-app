import React, { Component } from 'react';
import RouteBadge from './RouteBadge';
import LegDisruption from './LegDisruption';


class RouteLeg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openSteps: false
    }
  }

  toggleSteps(event) {
    let legsStatus = true;

    if (this.state.openSteps) {
      legsStatus = false;
    }

    this.setState({
      openSteps: legsStatus
    });
  }

  render() {
    console.log("Render legs listing");

    const legInfo = this.props.data,
          stopPoints = legInfo.path.stopPoints,
          instructionPoints = legInfo.instruction.steps,
          legDisruptions = legInfo.disruptions;

    let legSteps,
        legStepsList;

    if (legInfo.mode.id === 'walking') {
      if (instructionPoints.length) {
        legSteps = instructionPoints.map((data, i) =>
          <li key={i} className="leg-steps">{data.descriptionHeading} {data.description}</li>
        );
        legStepsList = <ul>{legSteps}</ul>
      }
    } else {
      if (stopPoints.length) {
        legSteps = stopPoints.map((data, i) =>
          <li key={i} className="leg-steps">{data.name}</li>
        );
        legStepsList = <ul>{legSteps}</ul>
      }
    }

    let LegDisruptionsUl;

    if (legInfo.isDisrupted) {
      let legDisruptionsLi = legDisruptions.map((data, i) =>
        <LegDisruption key={i} data={data} />
      )

      LegDisruptionsUl = <ul>{legDisruptionsLi}</ul>
    }

    // legStepsData.splice(-1);

    let legClassName = `main-leg`,
        legLabel;

    if (legInfo.mode.id === 'walking') {
      legClassName = `main-leg main-leg-walking`;
      legLabel = `${legInfo.departurePoint.commonName} ${legInfo.arrivalPoint.commonName}`

    } else if (legInfo.routeOptions[0].name) {
      switch (legInfo.mode.id) {
        case 'bus':
          legClassName = `main-leg main-leg-bus`;
          legLabel = <RouteBadge routeOptions={legInfo.routeOptions[0]} badgeClass="bus" appendRouteName="true" modeId={legInfo.mode.id} />
          break;

        case 'national-rail':
          legClassName = `main-leg main-leg-national-rail`;
          legLabel = <RouteBadge routeOptions={legInfo.routeOptions[0]} badgeClass="national-rail" appendRouteName="true" modeId={legInfo.mode.id} />
          break;

        default:
          legClassName = `main-leg main-leg-${legInfo.routeOptions[0].lineIdentifier.id}`;
          legLabel = <RouteBadge routeOptions={legInfo.routeOptions[0]} />
      }
    }

    let legStepsListShow = 'route-legs ',
        toggleStepsLabel = '⬇ Show stops';

    if (this.state.openSteps) {
      legStepsListShow = 'route-legs show-legs';
      toggleStepsLabel = '⬆ Hide stops';
    }

    return (
      <li className={legClassName}>
        <span className="route-leg-summary">
          {legLabel}
          <span className="route-leg-summary-time">{legInfo.duration}<small>mins</small></span>
        </span>

        <div className={ legStepsListShow }>
        {legStepsList}
        </div>

        <button className="show-hide-legs-button" onClick={(e) => this.toggleSteps(e)}>{toggleStepsLabel}</button>

        { LegDisruptionsUl }
      </li>
    )
  }
}

export default RouteLeg;
