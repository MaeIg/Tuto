/* eslint-disable prettier/prettier */
// Components/Search.tsx

import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, ActivityIndicator } from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import AmiiboItem, { AmiiboLayout } from './AmiiboItem';
import { getAmiiboWithSearchedCharacter } from '../API/AmiiboAPI';

export default function Search() {
  const [amiibos, setAmiibos] = useState<AmiiboLayout[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let searchText : string = '';

  const loadAmiibos = async () : Promise<void> => {
    try {
      setIsLoading(true);
      const data : { amiibo: AmiiboLayout[] } = await getAmiiboWithSearchedCharacter(searchText);
      setAmiibos(data.amiibo);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const displayAmiibos = () : JSX.Element => {
    if (isLoading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    } else {
      return (
        <FlatList
          data={amiibos}
          keyExtractor={(item) => item.head + item.tail}
          renderItem={({item}) => <AmiiboItem amiibo={item} />}
        />
      );
    }
  };

  return (
    <View style={styles.mainContainer} >
        <TextInput
          style={styles.textinput}
          placeholder="Nom de l'Amiibo"
          onChangeText={(text) => { searchText = text; }}
          onSubmitEditing={() => { loadAmiibos(); }}
        />
        <Button
          title="Rechercher"
          onPress={() => { loadAmiibos(); }}
        />
        { displayAmiibos() }
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
        marginTop: 20,
    },
    activityIndicatorContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
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
