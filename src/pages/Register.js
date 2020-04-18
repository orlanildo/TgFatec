import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import styles from './styles/styleRegister'


export default function Register({ navigation }) {

    return(
        <View style={styles.container}>
                <Text style={styles.titleScreen}>Register</Text>

                <TextInput style={styles.input} placeholder='Your full Name' autoCorrect={false}
                    onChangeText={() => {}} />
                <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false}
                    onChangeText={() => {}} />
                <TextInput style={styles.input} placeholder='********' autoCorrect={false}
                    onChangeText={() => {}} />

                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.textSubmit}>Access</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={styles.textLogin} onPress={() => navigation.navigate('Login')} >Login</Text>
                </TouchableOpacity>
        </View>
    )
}

