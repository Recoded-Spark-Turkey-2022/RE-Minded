import React from 'react';
import renderer from 'react-test-renderer';
import TherapistCreatePage from '../TherapistCreatePage';

test('About Page snapshot test', () => {
  const component = renderer.create(<TherapistCreatePage />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});