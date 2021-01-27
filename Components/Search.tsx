/* eslint-disable prettier/prettier */
// Components/Search.tsx

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <View style={styles.globalView} >
        <TextInput style={styles.textinput} placeholder="Nom de l'Amiibo"/>
        <Button title="Rechercher" onPress={() => {}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    globalView: {
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
