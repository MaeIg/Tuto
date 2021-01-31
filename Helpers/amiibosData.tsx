/* eslint-disable prettier/prettier */
// Helpers/amiibosData.js

interface AmiiboLayout {
    id: string;
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    name: string;
    image: string;
    release_eu: string;
}

export const amiiboList : AmiiboLayout[] = [
    {
        id: '0000000000340102',
        amiiboSeries: 'Super Mario Bros.',
        character: 'Mario',
        gameSeries: 'Super Mario',
        name: 'Mario',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00340102.png',
        release_eu: '2015-03-20',
    },
    {
        id: '0100000000040002',
        amiiboSeries: 'Super Smash Bros.',
        character: 'Link',
        gameSeries: 'The Legend of Zelda',
        name: 'Link',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-00040002.png',
        release_eu: '2014-11-28',
    },
    {
        id: '01000000037c0002',
        amiiboSeries: 'Super Smash Bros.',
        character: 'Link',
        gameSeries: 'The Legend of Zelda',
        name: 'Young Link',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_01000000-037c0002.png',
        release_eu: '2019-04-12',
    },
    {
        id: '05c00100001d0002',
        amiiboSeries: 'Super Smash Bros.',
        character: 'Samus',
        gameSeries: 'Metroid',
        name: 'Zero Suit Samus',
        image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_05c00100-001d0002.png',
        release_eu: '2015-03-20',
    },
];
