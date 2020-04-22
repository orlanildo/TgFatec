import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerPiker: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 7,
        marginBottom: 10,
    },
    textArea: {
        backgroundColor: '#fff',
        width: '90%',
        height: 100,
        marginBottom: 15,
        fontSize: 18,
        borderRadius: 7,
        paddingLeft: 7,
        paddingTop: 7,
        textAlignVertical: 'top',
    },
    piker: {
        backgroundColor: '#fff',
        height: 50,
        width: 172, 
    },
    input: {
        backgroundColor: '#fff',
        width: '90%',
        marginBottom: 15,
        fontSize: 18,
        borderRadius: 7,
        paddingLeft: 7,
        height: 45,
    },
    titleScreen: {
        marginTop: -80,
        color: '#35aaff',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: -240,
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
    textLogin: {
        color: '#35aaff',
        fontSize: 18,
    },
    

})