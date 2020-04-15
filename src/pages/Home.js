import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles/styleHome'


export default function Home() {
    const navigation = useNavigation()
    
    return(
        <View style={styles.container}>
            <Text>Home</Text>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('AddImage')} >
                <Text style={styles.textSubmit}>AddImage</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Profile')} >
                <Text style={styles.textSubmit}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}