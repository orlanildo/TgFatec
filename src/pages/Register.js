import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles/cssRegister'


export default function Register() {

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
                <Text style={styles.titleScreen}>Register</Text>

                <TextInput style={styles.input} placeholder='Your full Name' autoCorrect={false}
                    onChangeText={() => {}} />
                <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false}
                    onChangeText={() => {}} />
                <TextInput style={styles.input} placeholder='********' autoCorrect={false}
                    onChangeText={() => {}} />

                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.textSubmit}>Access</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 10 }}>
                    <Text style={styles.textLogin} onPress={() => navigation.navigate('Login')} >Login</Text>
                </TouchableOpacity>
        </View>
    )
}

