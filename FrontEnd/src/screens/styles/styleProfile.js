import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#98ff98',
    },
    containerAvatar: {
        flexDirection: 'row',
        width: '90%',
        height: 100,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    avatar: {
        marginLeft: -10,
        width: 80,
        height: 80,
        borderRadius: 75,
    },
    nickname: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 15,
    },
    containerToggleFormAddress: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    containerBtn:{
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10,
    },
    btnSubmit: {
        backgroundColor: '#35aaff',
        height: 45,
        width: 170,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSubmit: {
        color: '#fff',
        fontSize: 17 ,
    },
    containerMsgRemoval: {
        alignItems: 'center',
        borderRadius: 7,
        backgroundColor: '#fff',
        width: '90%',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    textRemoval: {
        fontSize: 17,
    },
    containerFurnitures: {
        borderWidth: 1,
        width: '90%',
        height: 450,
    },
    photoCarousel: {
        borderWidth: 2,
        height: 320,
    }

})
