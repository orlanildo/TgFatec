import React, { useState, useLayoutEffect, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import MapView, { Marker, Callout } from 'react-native-maps'
import * as Location from 'expo-location'

import styles from './stylesComponents/styleMap'


export default function Map({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null)
    const options = { email: 'teste@hotmail.com', secure: true }
    const [users, setUsers] = useState([{
        _id: 1,
        name: 'teste',
        latitude: -23.5209329,
        longitude: -46.8133443
    }])

    useEffect(() => {
        loadRegion()
    }, [])

    function loadRegion() {
        (async function loadLocation() {
            const { status } = await Location.requestPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
            }

            const { coords } = await Location.getCurrentPositionAsync({})

            console.log("\ecoords: ", coords)

            setCurrentRegion({
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1
            })
            console.log("\ncurrentRegion: ", currentRegion)
        })()
    }

    return (
        <>
            {currentRegion == null ? (
                <Text style={{ alignSelf: 'center' }}>Carregando...</Text>
                ) : (
                <MapView initialRegion={currentRegion} style={{ flex: 1 }} >
                    <Marker coordinate={{ latitude: currentRegion.latitude, longitude: currentRegion.longitude }} >
                        <Gravatar options={options} style={styles.avatarMap} />

                        <Callout onPress={() => navigation.navigate('Profile')}>
                            <View style={styles.callout}>
                                <Text style={styles.name}>Teste First</Text>
                                <Text style={styles.desc}>Descrição do Movél.</Text>
                                <Text style={styles.furniture}>Nome do Movél</Text>
                            </View>
                        </Callout>
                    </Marker>
                </MapView>
            )}
        </>
    )
}
