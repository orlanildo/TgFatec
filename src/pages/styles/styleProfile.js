import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },
    containerHeader: {
        flexDirection: 'row',
        width: '100%',
        marginTop: -35,
        backgroundColor: '#5CFF57',
        justifyContent: 'flex-end',
        alignItems: 'center'
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

})