import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import styles from './styles/styleAddFurniture'
import Camera from '../components/Camera'
import FormFurniture from '../components/FormFurniture'


export default function AddFurniture({ navigation }) {
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

                    <View style={styles.containerBtnAddFurniture} >
                        <TouchableOpacity onPress={openImagePickerAsync} >
                            <Entypo name="folder-images" size={50} color="#35aaff" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setOpenCamera(!openCamera)} >
                            <AntDesign name="camera" size={50} color="#35aaff" />
                        </TouchableOpacity>
                    </View>

                    <FormFurniture />

                    <View style={styles.containerBtnConclude}>
                        <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Profile')} >
                            <Text style={styles.textSubmit}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRegister}>
                            <Text style={styles.textRegister} onPress={() => navigation.goBack()} >Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            ) : (
                    <Camera />

                )
            }
        </>
    )
}