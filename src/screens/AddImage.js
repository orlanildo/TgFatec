import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

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
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: selectedImage }} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, width: '60%', justifyContent: 'space-around' }} >
                <TouchableOpacity onPress={openImagePickerAsync} >
                    <Entypo name="folder-images" size={50} color="#5CFF57" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <AntDesign name="camera" size={50} color="#5CFF57" />
                </TouchableOpacity>
            </View>

            <View style={styles.comment} >
                <TouchableOpacity style={{ marginLeft: -20, marginRight: 30 }} onPress={() => { }} >
                    <MaterialIcons name="comment" size={35} color="#5CFF57" />
                </TouchableOpacity>

                <TextInput style={styles.input} multiline={true}
                    placeholder='Adicione um comentário para esse movél'
                    onChangeText={() => { }} />
            </View>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => { }} >
                <Text style={styles.textSubmit}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.textRegister} onPress={() => navigation.navigate('Home')} >Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}