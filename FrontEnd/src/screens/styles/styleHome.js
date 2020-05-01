import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#98ff98',
    },
    containerTipMap: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 7,
        marginVertical: 5,
        padding: 5,
        alignItems: 'center'
    },
    tipMap: {
        fontSize: 17,
        color: '#35aaff'
    },
    containerMap: {
        flex: 2,
        width: '90%',
        marginBottom: 10,
    },
    addFurniture: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        right: 5,
        bottom: 5,
        zIndex: 9,
    },
})