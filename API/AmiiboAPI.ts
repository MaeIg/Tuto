/* eslint-disable prettier/prettier */

export const getAmiiboWithSearchedCharacter = async (amiiboCharacter : string) : Promise<any> => {
    const url : string = `https://www.amiiboapi.com/api/amiibo/?character=${amiiboCharacter}`;

    const response : Response = await fetch(url);
    return await response.json();
};
