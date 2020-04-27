import React, { useState, useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './stylesComponents/styleCamera'


export default function ComponentCamera() {
    const camRef = useRef(null)
    const [capturedPhoto, setCapturedPhoto] = useState(null)
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    if (hasPermission === null) return <View />
    if (hasPermission === false) return <Text>No access to camera</Text>

    async function takePickture(){
        if(camRef){
            const data = await camRef.current.takePictureAsync()
            setCapturedPhoto(data.uri)
        }
        console.log(capturedPhoto)
    }


    return (
        <View style={styles.container} >
            <Camera style={styles.camera} type={type} ref={camRef}>
                <View style={styles.containerButtons} >
                    <TouchableOpacity style={styles.flipCamera} onPress={() => { 
                        setType( type === Camera.Constants.Type.back ? 
                            Camera.Constants.Type.front : Camera.Constants.Type.back ) }}>

                        <Text style={styles.textBtn}> Flip </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.click} onPress={takePickture}>
                        <MaterialCommunityIcons name="camera-iris" size={45} color="#98ff98" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.back} onPress={() => {} } >
                        <Text style={styles.textBtn}> Back </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )
}