import React from 'react';
import renderer from 'react-test-renderer';
import EditProfileMain from '../EditProfileMain';

test('Edit Profile Page snapshot test', () => {
  const component = renderer.create(<EditProfileMain />);

  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
