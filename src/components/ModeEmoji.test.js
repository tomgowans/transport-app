import React from 'react';
import { shallow } from 'enzyme';
import ModeEmoji from './ModeEmoji';

it('renders mode emojis correctly', () => {
  const input = shallow(<ModeEmoji mode="tube" />);
  const output = <span role="img" aria-label="tube">🚇</span>;

  expect(input.contains(output)).toEqual(true);
});
