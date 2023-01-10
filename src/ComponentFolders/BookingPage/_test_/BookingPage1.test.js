import React from 'react';
import renderer from 'react-test-renderer';
import BookingPage1 from '../BookingPage1';

test('Booking1 Page snapshot test', () => {
  const component = renderer.create(<BookingPage1 />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
