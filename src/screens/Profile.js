import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native'

import styles from './styles/styleProfile'
import FormAddress from '../components/FormAddress'


export default function Profile({ navigation }) {
    const [heightForm, setHeightForm] = useState(new Animated.Value(1))
    const [widthForm, setWidthForm] = useState(new Animated.Value(80))

    function toggleFormAddress() {
        Animated.sequence([
            Animated.timing( widthForm, { toValue: 365, duration: 1000 } ),
            Animated.timing( heightForm, { toValue: 450, duration: 1000 } )
        ]).start()
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerToggleFormAddress}>
                <TouchableOpacity style={styles.btnSubmit} onPress={toggleFormAddress} >
                    <Text style={styles.textSubmit}>Cadastrar / Atualizar Endereço</Text>
                </TouchableOpacity>

                <Animated.View style={{ backgroundColor: '#5CFF57', width: widthForm, height: heightForm }} >
                    {/* <FormAddress /> */}
                </Animated.View>
            </View>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnSubmit}
                    onPress={() => navigation.navigate('AddImage')} >
                    <Text style={styles.textSubmit}>AddImage</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.btnSubmit, { marginTop: 10 }]}
                    onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.textSubmit}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}