import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles/styleMenu'


export default function Menu({ navigation }) {
    
    return(
        <View style={styles.container}>
            <Text>Menu</Text>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('AddImage')} >
                <Text style={styles.textSubmit}>AddImage</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Profile')} >
                <Text style={styles.textSubmit}>Profile</Text>
            </TouchableOpacity>
        </View>
    )
}