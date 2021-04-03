import {getAmiiboWithSearchedCharacter} from '../API/AmiiboAPI';
const nock = require('nock');

describe('AmiiboAPI', () => {
  const amiiboObject = {
    amiibo: [
      {
        amiiboSeries: 'Super Smash Bros.',
        character: 'Mario',
        gameSeries: 'Super Mario',
        head: '00000000',
        image:
          'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png',
        name: 'Mario',
        release: {
          au: '2014-11-29',
          eu: '2014-11-28',
          jp: '2014-12-06',
          na: '2014-11-21',
        },
        tail: '00000002',
        type: 'Figure',
      },
      {
        amiiboSeries: 'Super Mario Bros.',
        character: 'Mario',
        gameSeries: 'Super Mario',
        head: '00000000',
        image:
          'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png',
        name: 'Mario',
        release: {
          au: '2015-03-21',
          eu: '2015-03-20',
          jp: '2015-03-12',
          na: '2015-03-20',
        },
        tail: '00340102',
        type: 'Figure',
      },
    ],
  };
  const errorObject = {
    code: 404,
    error:
      'The requested URL was not found on the server. If you entered the URL manually please check your spelling and try again.',
  };

  const scope = nock('https://www.amiiboapi.com');
  scope.get('/api/amiibo/?character=').reply(200, errorObject);
  scope.get('/api/amiibo/?character=Mario').reply(200, amiiboObject);

  it('returns good data when character is ok (Mario)', () => {
    getAmiiboWithSearchedCharacter('Mario').then((returnValue) => {
      expect(returnValue).toBe(amiiboObject);
    });
  });

  it('returns good data when character is empty', () => {
    getAmiiboWithSearchedCharacter('').then((returnValue) => {
      expect(returnValue).toBe(errorObject);
    });
  });
});
