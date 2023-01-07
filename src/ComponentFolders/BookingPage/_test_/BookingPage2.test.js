import React from 'react';
import renderer from 'react-test-renderer';
import BookingPage2 from '../BookingPage2';

test('Booking2 Page snapshot test', () => {
  const component = renderer.create(<BookingPage2 />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
