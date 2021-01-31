/* eslint-disable prettier/prettier */
// Components/AmiiboItem

import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

interface AmiiboLayout {
    id: string;
    amiiboSeries: string;
    character: string;
    gameSeries: string;
    name: string;
    image: string;
    release_eu: string;
}

export default function AmiiboItem(props : {amiibo : AmiiboLayout}) {
    const amiibo : AmiiboLayout = props.amiibo;

    return (
        <View style={styles.main_container}>
            <Image style={styles.image} source={{uri: amiibo.image}} />
            <View style={styles.content_container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_text}>{amiibo.name}</Text>
                    <Text style={styles.amiibo_series}>{amiibo.amiiboSeries}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{amiibo.character} from {amiibo.gameSeries} game series !</Text>
                </View>
                <View style={styles.release_container}>
                    <Text style={styles.release_text}>Release date (eu) : {amiibo.release_eu}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        height: 160,
        flex: 1,
        flexDirection: 'row',
        marginLeft: 5,
        marginTop: 5,
    },
    image: {
        height: 150,
        width: 90,
    },
    content_container: {
        flex: 1,
        margin: 10,
    },
    title_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    title_text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 10,
        textAlignVertical: 'bottom',
    },
    amiibo_series: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 3,
        textAlignVertical: 'bottom',
    },
    description_container: {
        flex : 1,
        justifyContent: 'center',
    },
    description_text: {
        fontSize: 17,
    },
    release_container: {
        flex: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    release_text: {
        fontSize: 16,
    },
});
