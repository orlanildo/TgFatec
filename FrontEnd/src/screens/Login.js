import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, Animated } from 'react-native'

import styles from './styles/styleLogin'
import logoMidium from '../../assets/logoMidium.png'


export default function Login({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
    const [opacity] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 3,
                bounciness: 20
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 250,
            })
        ]).start()
    }, [])

    return(
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.containerLogoMidium}>
                <Image style={styles.logoMidium} source={logoMidium} />
            </View>

            <Animated.View style={[styles.containerInput, {
                    opacity: opacity,
                    transform: [{ translateY: offset.y }]
                }]} >

                <Text style={styles.titleScreen} >Login</Text>
                <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false}
                    onChangeText={() => {}} />
                <TextInput style={styles.input} placeholder='********' autoCorrect={false}
                    onChangeText={() => {}} />

                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                    <Text style={styles.textSubmit} >Enter</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.textRegister} onPress={() => navigation.navigate('Register')} >Register</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView> 
    )
}


