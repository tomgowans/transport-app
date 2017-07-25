import React from 'react';
import { shallow } from 'enzyme';
import LineBadge from './LineBadge';

it('renders line badges correctly', () => {
  const input = shallow(<LineBadge id="id" name="Name of Line" /> );
  const output = <p className="id">Name of Line</p>;

  expect(input.contains(output)).toEqual(true);
});
