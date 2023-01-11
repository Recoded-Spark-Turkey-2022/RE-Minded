import React from 'react';
import renderer from 'react-test-renderer';
import BookingPage3 from '../BookingPage3';

test('Booking3 Page snapshot test', () => {
  const component = renderer.create(<BookingPage3 />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
