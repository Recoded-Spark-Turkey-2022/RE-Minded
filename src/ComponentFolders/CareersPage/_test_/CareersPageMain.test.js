import React from 'react';
import renderer from 'react-test-renderer';
import CareersPageMain from '../CareersPageMain';

test('Careers Page snapshot test', () => {
  const component = renderer.create(<CareersPageMain />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});