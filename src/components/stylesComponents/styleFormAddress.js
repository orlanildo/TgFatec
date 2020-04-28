import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor : '#98ff98',
    },
    containerPiker: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    piker: {
        backgroundColor: '#fff',
        height: 45,
        color: '#35aaff',
    },
    textArea: {
        backgroundColor: '#fff',
        width: '90%',
        height: 100,
        marginBottom: 5,
        fontSize: 18,
        borderRadius: 7,
        padding: 5,
        textAlignVertical: 'top',
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 5,
        fontSize: 18,
        borderRadius: 7,
        paddingLeft: 7,
        height: 45,
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
        fontSize: 17,
    },   

})