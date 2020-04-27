import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#98ff98',
        paddingTop: 10,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 7,
        height: 45,
        marginVertical: 5,
        padding: 5,
    },
    formFurniture: {
        width: '90%',
    },
    inputComment: {
        height: 90,
        backgroundColor: '#fff',
        borderRadius: 7,
        paddingLeft: 5,
        paddingBottom: 60,
    },
    containerWeek: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        borderRadius: 7,
        marginTop: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    checkWeek: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: '#35aaff',
        marginLeft: 5,
    },
    textWeek: {
        color: '#35aaff',
    },
    comment: { 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around', 
        marginTop: 10,
        maxWidth: '70%',
        height: 100
    },
})