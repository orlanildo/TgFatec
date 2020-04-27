import React from 'react'
import { View, TouchableOpacity, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './stylesComponents/styleHeader'

export default function Header({ navigation }) {
    return (
        <View style={styles.containerHeader} >
            <TouchableOpacity >
                <AntDesign name="arrowleft" size={45} color="#35aaff" />
            </TouchableOpacity>

            <Image source={require('../../assets/logoSmallBlu.png')} />
            
            <TouchableOpacity >
                <AntDesign name="menu-fold" size={45} color="#35aaff" />
            </TouchableOpacity>
        </View>
    )
}