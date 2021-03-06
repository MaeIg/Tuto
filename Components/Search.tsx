/* eslint-disable prettier/prettier */
// Components/Search.tsx

import React from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import AmiiboItem from './AmiiboItem';
import { amiiboList } from '../Helpers/amiibosData';

export default function Search() {
  return (
    <View style={styles.mainContainer} >
        <TextInput style={styles.textinput} placeholder="Nom de l'Amiibo"/>
        <Button title="Rechercher" onPress={() => {}}/>
        <FlatList
          data={amiiboList}
          keyExtractor={(item) => item.id}
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
