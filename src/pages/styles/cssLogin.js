import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5CFF57'
    },
    containerLogoMidium: {
        marginTop: 80,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    logoMidium: {
        height: 290,
        width: 250,
    },
    titleScreen: {
        marginTop: -80,
        color: '#35aaff',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: -260,
    },
    containerInput: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        fontSize: 18,
        borderRadius: 7,
        paddingLeft: 7,
        height: 45,
    },
    textRegister: {
        color: '#35aaff',
        marginBottom: 10,
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        height: 45,
        width: '90%',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
    },
    btnRegister: {
        marginTop: 10,
    },
    textRegister: {
        color: '#35aaff',
        fontSize: 18,
    },
})