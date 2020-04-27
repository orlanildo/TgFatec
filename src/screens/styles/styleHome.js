import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5CFF57',
    },
    containerAvatar: {
        flexDirection: 'row',
        width: '100%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    avatar: {
        marginLeft: -90,
        width: 80,
        height: 80,
        borderRadius: 75,
    },
    furniture: {
        fontWeight: 'bold',
        marginTop: 3,
        fontSize: 12,
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
    nickname: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 15,
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