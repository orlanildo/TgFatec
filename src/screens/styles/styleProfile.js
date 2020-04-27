import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#5CFF57',

    },
    containerToggleFormAddress: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    containerBtn:{
        flexDirection: 'row',
        marginTop: 5,
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        height: 45,
        width: 170,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
    },
    containerFurnitures: {
        borderWidth: 1,
        width: '90%',
        height: 450,
    },
    photoCarousel: {
        borderWidth: 2,
        height: 320,
    }

})
