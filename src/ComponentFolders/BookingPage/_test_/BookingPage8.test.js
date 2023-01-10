import React from 'react';
import renderer from 'react-test-renderer';
import BookingPage8 from '../BookingPage8';

test('Booking8 Page snapshot test', () => {
  const component = renderer.create(<BookingPage8 />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
