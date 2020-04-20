import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles/styleProfile'
import FormAddress from './FormAddress'


export default function Profile({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader} >
                    <Image source={require('../../assets/logoSmall.png')} />
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.openDrawer()}>
                    <AntDesign name="menu-fold" size={45} color="black" />
                </TouchableOpacity>
            </View>

            <Text>Profile</Text>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('FormAddress')} >
                <Text style={styles.textSubmit}>Cadastrar / Atualizar Endereço</Text>
            </TouchableOpacity>
            <ScrollView>
            <Animated.View >
                <FormAddress />
            </Animated.View>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('AddImage')} >
                <Text style={styles.textSubmit}>AddImage</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textSubmit}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.textSubmit}>Logout</Text>
            </TouchableOpacity>
            </ScrollView>
        </View>
    )
}