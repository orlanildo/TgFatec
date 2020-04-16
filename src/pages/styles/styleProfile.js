import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    toggleMenu: {
        marginTop: 40,
        marginLeft: 20,
        marginBottom: -170,
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    containerProfile: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMap: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
        width: '90%',
    },
    addFurniture: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
    },
    email: {
        marginTop: 20,
        fontSize: 25,
    },
})