import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput, Picker, Animated } from 'react-native'

import styles from './stylesComponents/styleFormAddress'


export default function FormAddress({ navigation}) {

    const [selectedState, setselectedState] = useState("SP")
    const [selectedCity, setselectedCity] = useState("Carapicuíba")

    function testeData() {
        console.log('\nDados: ')
    }

    return (
        <View style={styles.container} >
            <View style={styles.containerPiker}>
                <Picker selectedValue={selectedState} style={[styles.piker, { width: '20%' }]}
                    onValueChange={(itemValue, itemIndex) => setselectedState(itemValue)} >
                    <Picker.Item label="SP" value="SP" />
                    <Picker.Item label="RJ" value="RJ" />
                    <Picker.Item label="BA" value="BA" />
                    <Picker.Item label="MG" value="MG" />
                    <Picker.Item label="DF" value="DF" />
                </Picker>
                <Picker selectedValue={selectedCity} style={[styles.piker, { width: '77%' }]}
                    onValueChange={(itemValue, itemIndex) => setselectedCity(itemValue)} >
                    <Picker.Item label="Carapicuíba" value="Carapicuíba" />
                    <Picker.Item label="Osasco" value="Osasco" />
                    <Picker.Item label="Barueri" value="Barueri" />
                    <Picker.Item label="São Paulo" value="São Paulo" />
                    <Picker.Item label="Guarulhos" value="Guarulhos" />
                </Picker>
            </View>

            <TextInput style={styles.input} placeholder='Cep:' autoCorrect={false}
                onChangeText={() => { }} />

            <View style={{ flexDirection: 'row' }}>
                <TextInput style={[styles.input, { marginRight: 4, width: '19%' }]} 
                    placeholder='Nº' autoCorrect={false}
                    onChangeText={() => { }} />
                <TextInput style={[styles.input, { marginLeft: 4, width: '69%' }]} 
                    placeholder='Rua:' autoCorrect={false}
                    onChangeText={() => { }} />
            </View>

            <TextInput style={styles.textArea} multiline={true}
                placeholder='Observações:' autoCorrect={false}
                onChangeText={() => { }} />

            <TouchableOpacity style={styles.btnSubmit} onPress={testeData} >
                <Text style={styles.textSubmit}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}