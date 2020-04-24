import React from 'react'
import { View, TouchableOpacity, Image, Alert} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './stylesComponents/styleHeader'

export default function Header({ navigation }) {
    return (
        <View style={styles.containerHeader} >
            <TouchableOpacity style={{ marginLeft: 5 }} onPress={() => Alert.alert('goBack')} >
                <AntDesign name="arrowleft" size={45} color="black" />
            </TouchableOpacity>
            <Image source={require('../../assets/logoSmall.png')} />
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.openDrawer()}>
                <AntDesign name="menu-fold" size={45} color="black" />
            </TouchableOpacity>
        </View>
    )
}