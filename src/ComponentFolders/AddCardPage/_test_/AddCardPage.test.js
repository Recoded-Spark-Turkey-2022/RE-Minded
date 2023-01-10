import React from 'react';
import renderer from 'react-test-renderer';
import AddCardPage from '../AddCardPage';

test('Add Card Page Page snapshot test', () => {
  const component = renderer.create(<AddCardPage />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
