import { StyleSheet, Dimensions } from 'react-native'


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
        backgroundColor: '#5CFF57',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
    title: {

    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#eee',
        marginTop: 10,
    },
    image: {
        width: '100%',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
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