import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    containerFurnitures: {
        width: '100%',
        height: 450,
        marginBottom: 10,
    },
    containerScroll: {
        width: '100%',
        height: '70%',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleDiv: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'center',
        bottom: 5,
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: '#fff',
    },
    containerDescFurniture: {
        borderColor: '#35aaff',
        borderWidth: 1,
        padding: 5,
    },
    nameFurniture: {
        fontWeight: 'bold',
    },
    descFurniture: {

    },
    addressFurniture: {
        fontWeight: 'bold',
    },
    removeTime: {
        fontWeight: 'bold',
    },

})