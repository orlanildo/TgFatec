import { StyleSheet } from 'react-native'
import { Component } from 'react'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
    containerToggleFormAddress: {
        position: 'absolute'
    },
    containerHeader: {
        flexDirection: 'row',
        width: '100%',
        marginTop: -35,
        backgroundColor: '#5CFF57',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    containerBtn:{

    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        height: 45,
        width: 370,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
    },

})
