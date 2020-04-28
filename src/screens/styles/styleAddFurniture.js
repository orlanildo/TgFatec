import { StyleSheet, Dimensions } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#98ff98',
        paddingTop: 10,
    },
    imageContainer: {
        width: '90%',
        backgroundColor: '#dcdcdc',
        borderWidth: 1,
        borderRadius: 7,
        borderColor: '#35aaff',
    },
    containerBtnAddFurniture: { 
        flexDirection: 'row', 
        margin: 10, 
        width: '60%', 
        justifyContent: 'space-around',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 7,
        height: 45,
        marginVertical: 5,
        padding: 5,
    },
    image: {
        width: '100%',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
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
    containerBtnConclude: {
        width: '90%',
        margin: 10,
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        height: 45,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSubmit: {
        color: '#fff',
        fontSize: 18,
    },
    textRegister: {
        alignSelf: 'center',
        color: '#35aaff',
        fontSize: 18,
        marginVertical: 10,
    },
})