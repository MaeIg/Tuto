/* eslint-disable prettier/prettier */
// Components/Search.tsx

import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function Search() {
  return (
    <View >
        <TextInput placeholder="Nom de l'Amiibo"/>
        <Button title="Rechercher" onPress={() => {}}/>
    </View>
  );
}
