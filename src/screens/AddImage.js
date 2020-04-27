import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import styles from './styles/styleAddImage'
import Camera from '../components/Camera'
import DateTime from '../components/DateTimePicker'


export default function AddImage({ navigation }) {
    let [selectedImage, setSelectedImage] = useState()
    let [openCamera, setOpenCamera] = useState(false)

    const openImagePickerAsync = async () => {
        if (await ImagePicker.requestCameraRollPermissionsAsync() === false) {
            alert("Permission to access camera roll is required!")
            return
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync()

        if (pickerResult.cancelled === true) return

        setSelectedImage(selectedImage = pickerResult.uri)
    }

    return (
        <>
            {openCamera == false ? (
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: selectedImage }} />
                    </View>

                    <View style={styles.containerBtnAddImage} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Entypo name="folder-images" size={50} color="#35aaff" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setOpenCamera(!openCamera)} >
                            <AntDesign name="camera" size={50} color="#35aaff" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.formFurniture}>
                        <TextInput style={styles.input} placeholder='Nome do móvél'
                            onChangeText={() => { }} />

                        <TextInput style={styles.inputComment} multiline={true}
                            placeholder='Adicione um comentário para esse movél'
                            onChangeText={() => { }} />

                        <DateTime />

                    </View>

                    <View style={styles.containerBtnConclude}>

                        <TouchableOpacity style={styles.btnSubmit} onPress={() => { }} >
                            <Text style={styles.textSubmit}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRegister}>
                            <Text style={styles.textRegister} onPress={() => navigation.navigate('Home')} >Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ) : (
                    <Camera />

                )}
        </>
    )
}