import React from 'react';
import renderer from 'react-test-renderer';
import BookingPage5 from '../BookingPage5';

test('Booking5 Page snapshot test', () => {
  const component = renderer.create(<BookingPage5 />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
