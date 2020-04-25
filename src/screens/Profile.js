import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native'

import styles from './styles/styleProfile'
import FormAddress from '../components/FormAddress'


export default function Profile({ navigation }) {
    //const [start, setStart] = useState(false)
    const [finishLoadingForm, setFinishLoadingForm] = useState(false)
    const [toggleForm, setToggleForm] = useState(false)
    const [heightForm, setHeightForm] = useState(new Animated.Value(2))
    const [widthForm, setWidthForm] = useState(new Animated.Value(100))

    function opemFrom() {
        if (!toggleForm) {
            console.log('if toggleForm: ', toggleForm)
            Animated.sequence([
                Animated.timing(widthForm, { toValue: 365, duration: 400 }),
                Animated.timing(heightForm, { toValue: 360, duration: 500 })
            ]).start()
            
            setTimeout(() => { setFinishLoadingForm(true) }, 600)
        } else {
            setFinishLoadingForm(false)
            Animated.sequence([
                Animated.timing(heightForm, { toValue: 2, duration: 300 }),
                Animated.timing(widthForm, { toValue: 100, duration: 300 })
            ]).start()
        }
        setToggleForm(!toggleForm)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerToggleFormAddress}>

                <TouchableOpacity style={styles.btnSubmit} onPress={opemFrom} >
                    <Text style={styles.textSubmit}>Cadastrar / Atualizar Endereço</Text>
                </TouchableOpacity>
                <Animated.View style={{ width: widthForm, 
                    height: heightForm, backgroundColor: '#5CFF57', marginTop: 5 }}>
                    {finishLoadingForm ? (
                        <FormAddress />
                        ) : (
                        null
                    )}
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