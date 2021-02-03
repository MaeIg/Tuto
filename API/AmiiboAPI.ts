/* eslint-disable prettier/prettier */

export const getAmiiboWithSearchedCharacter = (amiiboCharacter : string) => {
    const url : string = `https://www.amiiboapi.com/api/amiibo/?character=${amiiboCharacter}`;

    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
};
