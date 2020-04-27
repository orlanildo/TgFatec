import React, { useState, useEffect } from 'react'
import { View, Picker, TextInput, Platform, StyleSheet, Keyboard, TouchableOpacity } from 'react-native'
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
        showMode('date')
    }

    const showTimepicker = () => {
        showMode('time')
    }

    return (
        <View>
            <View style={styles.btnTime}>
                <TextInput style={[styles.input, {width: 77, marginRight: -15}]} placeholder='Hora Inicial'
                    showSoftInputOnFocus={false} onTouchStart={showTimepicker} />

                <TextInput style={[styles.input, {width: 77}]} placeholder='Hora Final' value={'18:00'}
                    showSoftInputOnFocus={false} onTouchStart={showTimepicker} />

                <TextInput style={[styles.input, {width: 87, marginRight: -15}]} placeholder='Data Inicial' 
                    showSoftInputOnFocus={false} onTouchStart={showDatepicker} />

                <TextInput style={[styles.input, {width: 87}]} placeholder='Data Final' value={'26/08/1993'}
                    showSoftInputOnFocus={false} onTouchStart={showDatepicker} />

                {/* <Picker style={styles.pickerDate} mode='dropdown' selectedValue={selectedPickerDate}
                    onValueChange={(itemValue) => setSelectedPickerData(itemValue)} >
                    <Picker.Item label="Final de Semana" value="Final de Semana" />
                    <Picker.Item label="Meio da Semana" value="Meio da Semana" />
                    <Picker.Item label="Dia Especifico" value="Dia Especifico" />
                </Picker> */}
            </View>

            {show && (
                <DateTimePicker testID="dateTimePicker" value={date}
                    timeZoneOffsetInMinutes={0} mode={mode}
                    is24Hour={true} display="default"
                    onChange={onChange}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    btnTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
    },
    input: {
        textAlign: 'center',
        borderRadius: 7,
        backgroundColor: '#fff',
        height: 45,
    },
    pickerDate: {
        width: 140,
        backgroundColor: '#fff',
        height: 45,
        color: '#35aaff'
    }
})