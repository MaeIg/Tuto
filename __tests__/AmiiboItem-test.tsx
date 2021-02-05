import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import AmiiboItem from '../Components/AmiiboItem';

describe('AmiiboItem', () => {
  const item = {
    head: 'ecdzare',
    tail: 'vsfrdet',
    amiiboSeries: 'amiibo Series',
    character: 'character',
    gameSeries: 'game series',
    name: 'name',
    image:
      'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
    release: {
      eu: '2020-03-12',
    },
  };

  it('renders correctly', () => {
    const tree = renderer.create(<AmiiboItem amiibo={item} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
