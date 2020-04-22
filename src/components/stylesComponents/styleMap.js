import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    textLoadingMap: {
        zIndex: 9,
        position: 'absolute',
        right: 110,
        bottom: 250,
        fontSize: 20,
        color: '#666',
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
    nickname: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 15,
    },
})