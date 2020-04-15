import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles/styleProfile'


export default function Profile() {
    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <Text>Profile</Text>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textSubmit}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}