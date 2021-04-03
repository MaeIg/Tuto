import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Components/Search';

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
