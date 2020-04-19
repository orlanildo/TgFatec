import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './styles/styleMenu'


export default function DrawerContent({ navigation }) {

	const testeNavigarion = () => {
		console.log('navigation: ', navigation)
	}

	return (
		<View >
			<TouchableOpacity style={[styles.btnSubmit, { marginTop: 80 }]} onPress={testeNavigarion} >
				<Text style={styles.textSubmit}>AddImage</Text>
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





