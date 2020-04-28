import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './stylesComponents/styleDrawerContent'


export default function DrawerContent({ navigation }) {

	const testeNavigarion = () => {
		console.log('navigation: ', navigation)
	}

	return (
		<View style={styles.container} >
			<TouchableOpacity style={[styles.btnSubmit, { marginTop: 40 }]} onPress={testeNavigarion} >
				<Text style={styles.textSubmit}>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnSubmit} onPress={testeNavigarion} >
				<Text style={styles.textSubmit}>AddFurniture</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnSubmit} onPress={testeNavigarion} >
				<Text style={styles.textSubmit}>Profile</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.btnSubmit} onPress={testeNavigarion} >
				<Text style={styles.textSubmit}>Logout</Text>
			</TouchableOpacity>
		</View>
	)
}





