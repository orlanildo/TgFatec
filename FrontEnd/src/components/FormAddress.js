import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Picker } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './stylesComponents/styleFormAddress'


export default function FormAddress({ navigation }) {
    const [selectedState, setselectedState] = useState('SP')
    const [selectedCity, setselectedCity] = useState("Carapicuíba")

    return (
        <View style={styles.container} >
            <View style={styles.containerPiker}>
                <Picker mode='dropdown' selectedValue={selectedState} style={[styles.piker, { width: '21%' }]}
                    onValueChange={(itemValue) => setselectedState(itemValue)} >
                    <Picker.Item label="SP" value="SP" />
                    <Picker.Item label="RJ" value="RJ" />
                    <Picker.Item label="BA" value="BA" />
                    <Picker.Item label="MG" value="MG" />
                    <Picker.Item label="DF" value="DF" />
                </Picker>
                <Picker mode='dropdown' selectedValue={selectedCity} style={[styles.piker, { width: '77%' }]}
                    onValueChange={(itemValue) => setselectedCity(itemValue)} >
                    <Picker.Item label="Carapicuíba" value="Carapicuíba"  />
                        
                    <Picker.Item label="Osasco" value="Osasco" />
                    <Picker.Item label="Barueri" value="Barueri" />
                    <Picker.Item label="São Paulo" value="São Paulo" />
                    <Picker.Item label="Guarulhos" value="Guarulhos" />
                </Picker>
            </View>

            <TextInput style={styles.input} placeholder='Cep:' autoCorrect={false}
                onChangeText={() => { }} />

            <View style={{ flexDirection: 'row' }}>
                <TextInput style={[styles.input, { marginRight: 3, width: '19%' }]}
                    placeholder='Nº' autoCorrect={false}
                    onChangeText={() => { }} />
                <TextInput style={[styles.input, { marginLeft: 3, width: '69%' }]}
                    placeholder='Rua:' autoCorrect={false}
                    onChangeText={() => { }} />
            </View>

            <TextInput style={styles.textArea} multiline={true}
                placeholder='Observações:' autoCorrect={true}
                onChangeText={() => { }} />

            <TouchableOpacity style={styles.btnSubmit} onPress={() => { }} >
                <Text style={styles.textSubmit}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}