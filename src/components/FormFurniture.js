import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, Image, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

import styles from './stylesComponents/styleFormFurniture'
import DateTime from './DateTimePicker'


export default function FormFurniture({ navigation }) {

    return (
        <View style={styles.formFurniture}>
            <TextInput style={styles.input} placeholder='Nome do móvél'
                onChangeText={() => { }} />

            <TextInput style={styles.inputComment} multiline={true}
                placeholder='Adicione um comentário para esse movél'
                onChangeText={() => { }} />

            <View style={styles.containerWeek}>
                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} >
                        <AntDesign name="check" size={17} color="#35aaff" />
                    </View>
                    <Text style={styles.textWeek} >Dom</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} ></View>
                    <Text style={styles.textWeek} >Seg</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} ></View>
                    <Text style={styles.textWeek} >Ter</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} ></View>
                    <Text style={styles.textWeek} >Qua</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} ></View>
                    <Text style={styles.textWeek} >Qui</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} >
                        <AntDesign name="check" size={17} color="#35aaff" />
                    </View>
                    <Text style={styles.textWeek} >Sex</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} >
                    <View style={styles.checkWeek} >
                        <AntDesign name="check" size={17} color="#35aaff" />
                    </View>
                    <Text style={styles.textWeek} >Sáb</Text>
                </TouchableOpacity>
            </View>

            <DateTime />
        </View>

    )
}