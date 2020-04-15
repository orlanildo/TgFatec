import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


import styles from './styles/cssLogin'

export default function Login() {
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>Login</Text>
            <Button title='go back' onPress={() => navigation.navigate('Register')}/>
        </View>
    )
}


