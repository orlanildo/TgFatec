import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

import styles from './styles/styleProfile'
import FormAddress from '../components/FormAddress'
import Furniture from '../components/Furniture'


export default function Profile({ navigation }) {
    const options = { email: 'test@hotmail.com', secure: true }

    //const [start, setStart] = useState(false)
    const [finishLoadingForm, setFinishLoadingForm] = useState(false)
    const [user, setUser] = useState(true)
    const [toggleForm, setToggleForm] = useState(false)
    const [heightForm, setHeightForm] = useState(new Animated.Value(2))
    const [widthForm, setWidthForm] = useState(new Animated.Value(100))

    function opemFrom() {
        if (!toggleForm) {
            console.log('if toggleForm: ', toggleForm)
            Animated.sequence([
                Animated.timing(widthForm, { toValue: 365, duration: 400 }),
                Animated.timing(heightForm, { toValue: 310, duration: 500 })
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

            <View style={styles.containerAvatar}>
                <Gravatar options={options} style={styles.avatar} />
                <View style={{ marginLeft: -80 }}>
                    <Text style={styles.email}>Teste First</Text>
                    <Text style={styles.nickname}>teste@hotmail.com</Text>
                </View>
            </View>

            <View style={styles.containerToggleFormAddress}>
                {user ? (
                    <TouchableOpacity style={[styles.btnSubmit, { width: 270 }]} onPress={opemFrom} >
                        <Text style={styles.textSubmit}>Atualizar Endereço</Text>
                    </TouchableOpacity>
                    ) : (
                    <View style={styles.containerMsgRemoval}>
                        <Text style={styles.textRemoval} >Click na descrição de um Movél</Text>
                        <Text style={styles.textRemoval} >para confirmar (via WhatSap) a retirada</Text>
                    </View>
                )}


                <Animated.View style={{ width: widthForm, height: heightForm }}>
                    {finishLoadingForm ? (
                        <FormAddress />
                    ) : (
                            null
                        )}
                </Animated.View>
            </View>

            <ScrollView style={{ marginHorizontal: 10 }} showsVerticalScrollIndicator={false} >
                <Furniture />
                <Furniture />
                <Furniture />
                <Furniture />
                <Furniture />
            </ScrollView>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={[styles.btnSubmit, { marginRight: 10 }]}
                    onPress={() => navigation.navigate('AddFurniture')} >
                    <Text style={styles.textSubmit}>AddFurniture</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSubmit}
                    onPress={() => navigation.navigate('Login')} >
                    <Text style={styles.textSubmit}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}