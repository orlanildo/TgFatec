import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'

import styles from './styles/styleAddImage'


export default function AddImage() {
    const navigation = useNavigation()

    let [selectedImage, setSelectedImage] = React.useState(null);

    let openImagePickerAsync = async () => {
      let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert('Permission to access camera roll is required!');
        return;
      }
  
      let pickerResult = await ImagePicker.launchImageLibraryAsync();
      if (pickerResult.cancelled === true) {
        return;
      }
  
      setSelectedImage({ localUri: pickerResult.uri });
    };
  
    if (selectedImage !== null) {
      return (
        <View style={styles.container}>
          <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
        </View>
      );
    }
    
    return(
        <View style={styles.container}>
            <Text>AddImage</Text>

            <TouchableOpacity style={styles.btnSubmit} onPress={openImagePickerAsync} >
                <Text style={styles.textSubmit}>Pick a photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textSubmit}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}