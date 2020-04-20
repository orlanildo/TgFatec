import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHeader: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
        backgroundColor: '#5CFF57',
        justifyContent: 'flex-end',
        alignItems: 'center',
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
    avatarMap: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },
    callout: {
        width: 260,
        borderRadius: 7,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    desc: {
        color: '#666',
        marginTop: 3,
        fontSize: 12,
    },
    furniture: {
        fontWeight: 'bold',
        marginTop: 3,
        fontSize: 12,
    },
    containerMap: {
        flex: 2,
        backgroundColor: '#eee',
        width: '90%',
        height: 400,
    },
    addFurniture: {
        position: 'absolute',
        flexDirection: 'row',
        alignSelf: 'flex-end',
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