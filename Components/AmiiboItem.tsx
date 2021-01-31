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
        <View style={styles.mainContainer}>
            <Image style={styles.image} source={{uri: amiibo.image}} />
            <View style={styles.contentContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{amiibo.name}</Text>
                    <Text style={styles.amiiboSeries}>{amiibo.amiiboSeries}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{amiibo.character} from {amiibo.gameSeries} game series !</Text>
                </View>
                <View style={styles.releaseContainer}>
                    <Text style={styles.releaseText}>Release date (eu) : {amiibo.release_eu}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
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
    contentContainer: {
        flex: 1,
        margin: 10,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        alignContent: 'flex-start',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginRight: 10,
        textAlignVertical: 'bottom',
    },
    amiiboSeries: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 3,
        textAlignVertical: 'bottom',
    },
    descriptionContainer: {
        flex : 1,
        justifyContent: 'center',
    },
    descriptionText: {
        fontSize: 17,
    },
    releaseContainer: {
        flex: 0.5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    releaseText: {
        fontSize: 16,
    },
});
