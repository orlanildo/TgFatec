import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imageContainer: {
        width: '90%',
        backgroundColor: '#ccc',
        marginTop: 15
    },
    image: {
        width: '100%',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    comment: { 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around', 
        marginTop: 10,
        maxWidth: '70%',
        height: 100
    },
    btnSubmit: {
        position: 'absolute',
        marginTop: 400,
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
    textRegister: {
        color: '#35aaff',
        fontSize: 18,
        marginTop: 70,
    },
})