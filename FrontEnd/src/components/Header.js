import React, { useState } from 'react'
import { View, TouchableOpacity, Image} from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { DrawerActions, useNavigation  } from '@react-navigation/native'

import styles from './stylesComponents/styleHeader'

export default function Header() {
    const navigation = useNavigation()

    function test() {
        console.log('\n', navigation.dangerouslyGetState())
    }

    return (
        <View style={styles.containerHeader} >
            <TouchableOpacity onPress={test} >
                <AntDesign name="arrowleft" size={45} color="#35aaff" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={require('../../assets/logoSmallBlu.png')} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <AntDesign name="menu-fold" size={45} color="#35aaff" />
            </TouchableOpacity>
        </View>
    )
}