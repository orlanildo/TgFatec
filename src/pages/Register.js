import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles/cssRegister'


export default function Register() {

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>Register</Text>
            <Button title='go back' onPress={() => navigation.navigate('Login')}/>
        </View>
    )
}