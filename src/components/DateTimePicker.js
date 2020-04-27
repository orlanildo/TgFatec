import React, { useState } from 'react'
import { View, Picker, TextInput, Platform, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

export default function DateTime() {
    const [date, setDate] = useState(new Date(1598051730000))
    const [mode, setMode] = useState('date')
    const [show, setShow] = useState(false)

    const [selectedPickerDate, setSelectedPickerData] = useState("Final de semana")


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date
        setShow(Platform.OS === 'ios')
        setDate(currentDate)
    }

    const showMode = currentMode => {
        setShow(true)
        setMode(currentMode)
    }

    const showDatepicker = () => {
        console.log('showDatepicker: ')
        
        showMode('date')
    }

    const showTimepicker = () => {
        showMode('time')
    }

    return (
        <View>
            <View style={styles.btnTime}>
                <TextInput style={styles.input} placeholder='Hora Inicial'
                    onTouchStart={showTimepicker} />
                <TextInput style={[styles.input, { marginRight: 20}]} placeholder='Hora Final'
                    onTouchStart={showTimepicker} />

                <Picker style={styles.pickerDate} mode='dropdown' selectedValue={selectedPickerDate}
                    onValueChange={(itemValue) => setSelectedPickerData(itemValue)} >
                    <Picker.Item label="Final de Semana" value="Final de Semana" />
                    <Picker.Item label="Meio da Semana" value="Meio da Semana" />
                    <Picker.Item label="Dia Especifico" value="Dia Especifico" />
                </Picker>
            </View>

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    timeZoneOffsetInMinutes={0}
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    btnTime: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 5,
    },
    input: {
        borderRadius: 7,
        backgroundColor: '#fff',
        height: 45,
        width: 90,
        paddingLeft: 5,
    },
    pickerDate: {
        width: 140,
        backgroundColor: '#fff',
        height: 45,
        color: '#35aaff'
    }
})