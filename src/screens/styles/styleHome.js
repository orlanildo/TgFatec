import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98ff98',
    },
    containerMap: {
        flex: 2,
        width: '90%',
        height: 400,
    },
    addFurniture: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        right: 5,
        bottom: 5,
        zIndex: 9,
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