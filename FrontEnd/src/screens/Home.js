import React, { useState, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles/styleHome'
import Map from '../components/Map'


export default function Home({ navigation }) {
    const options = { email: 'test@hotmail.com', secure: true }

    return (
        <View style={styles.container}>
            <View style={styles.containerTipMap} >
                <Text style={styles.tipMap} >Escolha alguem no mapa</Text>
                <Text style={styles.tipMap} >que precise de uma coleta</Text>
            </View>

            <View style={styles.containerMap} >
                <Map />
                
                <View style={styles.addFurniture} >
                    <TouchableOpacity onPress={() => navigation.navigate('AddFurniture')} >
                        <AntDesign name="pluscircle" size={50} color="#35aaff" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}