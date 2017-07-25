import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';


it('renders search form correctly', () => {
  const input = shallow(<SearchForm /> );
  const output = <form>
  <input type="text" name="searchLocation" />
  <input type="submit" />
  </form>;

  expect(input.contains(output)).toEqual(true);
});
