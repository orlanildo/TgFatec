import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

import styles from './styles/styleAddImage'


export default function AddImage() {
    const navigation = useNavigation()

    let [selectedImage, setSelectedImage] = useState();

    let openImagePickerAsync = async () => {
      if(await ImagePicker.requestCameraRollPermissionsAsync() === false){
          alert("Permission to access camera roll is required!")
          return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }

      setSelectedImage( selectedImage = pickerResult.uri )
    };
    
    return(
        <View style={styles.container}>
            <Text style={styles.title} >AddImage</Text>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: selectedImage }} />
            </View>

            <TextInput placeholder='Adicione um comentário para essa foto ?' 
                onChangeText={() => {}} style={styles.input} />

            <TouchableOpacity style={styles.btnSubmit} onPress={openImagePickerAsync} >
                <Text style={styles.textSubmit}>Pick a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => {}} >
                <Text style={styles.buttomText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textSubmit}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}