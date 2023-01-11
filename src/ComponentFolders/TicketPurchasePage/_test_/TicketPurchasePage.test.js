import React from 'react';
import renderer from 'react-test-renderer';
import TicketPurchasePage from '../TicketPurchasePage';

test('Ticket Purchase Page snapshot test', () => {
  const component = renderer.create(<TicketPurchasePage />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
