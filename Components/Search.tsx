/* eslint-disable prettier/prettier */
// Components/Search.tsx

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AmiiboItem, { AmiiboLayout } from './AmiiboItem';
import { getAmiiboWithSearchedCharacter } from '../API/AmiiboAPI';

export default function Search() {
  const [amiibos, setAmiibos] = useState<AmiiboLayout[]>([]);

  let searchText : string = '';

  const loadAmiibos = async () : Promise<void> => {
    try {
      const data : { amiibo: AmiiboLayout[] } = await getAmiiboWithSearchedCharacter(searchText);
      setAmiibos(data.amiibo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.mainContainer} >
        <TextInput
          style={styles.textinput}
          placeholder="Nom de l'Amiibo"
          onChangeText={(text) => { searchText = text; }}
        />
        <Button
          title="Rechercher"
          onPress={() => { loadAmiibos(); }}
        />
        <FlatList
          data={amiibos}
          keyExtractor={(item) => item.head + item.tail}
          renderItem={({item}) => <AmiiboItem amiibo={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
        marginTop: 20,
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
    },
  });
