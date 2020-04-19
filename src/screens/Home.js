import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles/styleHome'

export default function Home({ navigation }) {
    const options = { email: 'teste@hotmail.com', secure: true }

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
                <Image style={{ width: '100%', height: '100%' }} source={require('../../assets/imgMapa.jpg')} />
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