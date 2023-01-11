import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../Navbar';

test('Navbar test snapshot', () => {
  const component = renderer.create(<Navbar />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
