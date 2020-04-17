import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { AntDesign } from '@expo/vector-icons'

//import { useNavigation, DrawerActions } from '@react-navigation/native'

import styles from './styles/styleProfile'

//import Menu from './Menu'


export default function Profile(navigation) {
    const options = { email: 'teste@hotmail.com', secure: true }

    //const navigation = useNavigation()

    function open(){
        //console.log('Menu: ', Menu)
        //console.log('teste open: ', navigation.navigate('Drawer'))
        //console.log('DraerActions: ', DrawerActions)
        console.log('open')
    }


    return(
        <View style={styles.container}>
            <View style={styles.toggleMenu} >
                <TouchableOpacity onPress={ open }>
                    <AntDesign name="menu-fold" size={45} color="#5CFF57" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerProfile}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.email}>Teste First</Text>
                <Text style={styles.nickname}>teste@hotmail.com</Text>
            </View>

            <View style={styles.containerMap} >
                <Text>Map</Text>
            </View>

            <View style={styles.addFurniture} >
                <TouchableOpacity onPress={() => {}} >
                    <AntDesign name="pluscircle" size={50} color="#5CFF57" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.textSubmit}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.textSubmit}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}