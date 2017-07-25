import React from 'react';
import { shallow } from 'enzyme';
import LineBadge from './../LineBadge';
import CountDownItem from './CountDownItem';

it('renders countdown item correctly', () => {
  const input = shallow(<CountDownItem data="[{ 'timeToStation': 60, 'lineId': 'tram', 'destinationName': 'Wimbledon', 'lineId': 'tram', 'lineName': 'Tram' }]" />);
  const output = <li><p className="tram">Tram</p><span role="img" aria-label="destination">🏁</span> Wimbledon ⏱ 1mins</li>;

  expect(input.contains(output)).toEqual(true);
});
