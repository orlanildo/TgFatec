import React, { useState, useLayoutEffect } from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles/styleHome'
import Map from '../components/Map'


export default function Home({ navigation }) {
    const options = { email: 'teste@hotmail.com', secure: true }

    return (
        <View style={styles.container}>
            <View style={styles.containerAvatar}>
                <Gravatar options={options} style={styles.avatar} />
                <View style={{ marginLeft: -200 }}>
                    <Text style={styles.email}>Teste First</Text>
                    <Text style={styles.nickname}>teste@hotmail.com</Text>
                </View>
            </View>

            <Text style={{ marginTop: 20 }} >Escolha algume no mapa que precise de uma coleta</Text>

            <View style={styles.containerMap} >
                <Map />
                <View style={styles.addFurniture} >
                    <TouchableOpacity onPress={() => { }} >
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