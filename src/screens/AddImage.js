import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles/styleAddImage'


export default function AddImage({ navigation }) {
    let [selectedImage, setSelectedImage] = useState()

    let openImagePickerAsync = async () => {
        if (await ImagePicker.requestCameraRollPermissionsAsync() === false) {
            alert("Permission to access camera roll is required!")
            return
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync()

        if (pickerResult.cancelled === true) return

        setSelectedImage(selectedImage = pickerResult.uri)
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader} >
                <Image source={require('../../assets/logoSmall.png')} />
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.openDrawer()}>
                    <AntDesign name="menu-fold" size={45} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: selectedImage }} />
            </View>

            <TextInput placeholder='Adicione um comentário para essa foto'
                onChangeText={() => { }} style={styles.input} />

            <TouchableOpacity style={styles.btnSubmit} onPress={openImagePickerAsync} >
                <Text style={styles.textSubmit}>Pick a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => { }} >
                <Text style={styles.buttomText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textSubmit}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}