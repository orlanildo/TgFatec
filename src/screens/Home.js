import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { AntDesign } from '@expo/vector-icons'
import MapView, { Marker, Callout } from 'react-native-maps'
import * as Location from 'expo-location'

import styles from './styles/styleHome'
import { set } from 'react-native-reanimated'

export default function Home({ navigation }) {
    const [currentRegion, setCurrentRegion] = useState(null)
    const [latElon, setLatElon] = useState(null)
    const options = { email: 'teste@hotmail.com', secure: true }

    const getLocale = async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission to access location was denied');
        }
  
        let location = await Location.getLastKnownPositionAsync({})

        regionFrom(location)
    }

    function regionFrom(location) {
        let lat = location.coords.latitude
        let lon = location.coords.latitude

        distance = distance / 2
        const circumference = 40075
        const oneDegreeOfLatitudeInMeters = 111.32 * 1000
        const angularDistance = distance / circumference

        const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
        const longitudeDelta = Math.abs(Math.atan2(
            Math.sin(angularDistance) * Math.cos(lat),
            Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

        return result = {
            latitude: lat,
            longitude: lon,
            latitudeDelta,
            longitudeDelta,
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerHeader} >
                <Image source={require('../../assets/logoSmall.png')} />
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.openDrawer()}>
                    <AntDesign name="menu-fold" size={45} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.containerAvatar}>
                <Gravatar options={options} style={styles.avatar} />
                <View style={{ marginLeft: -200 }}>
                    <Text style={styles.email}>Teste First</Text>
                    <Text style={styles.nickname}>teste@hotmail.com</Text>
                </View>
            </View>

            <Text style={{ marginTop: 20 }} >Escolha algume no mapa que precise de uma coleta</Text>

            <View style={styles.containerMap} >
                <MapView initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} style={{ flex: 1 }} >
                    <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} >
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

                <View style={styles.addFurniture} >
                    <TouchableOpacity onPress={() => {}} >
                        <AntDesign name="pluscircle" size={50} color="#5CFF57" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ margin: 15, width: '100%', marginLeft: 50 }}>
                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Profile')} >
                    <Text style={styles.textSubmit}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}