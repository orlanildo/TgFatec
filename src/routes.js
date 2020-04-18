import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

const AuthContext = React.createContext();

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AddImage from './pages/AddImage'

import DrawerContent from './pages/Menu'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
//const Tab = createBottomTabNavigator()

// const logado = true

// const AuthScree = () => {
// 	<Stack.Navigator screenOptions={{ headerShown: false }} >
// 		<Stack.Screen name="Login" component={Login} />
// 		<Stack.Screen name="Register" component={Register} />
// 	</Stack.Navigator>
// }

// const TabScreen = () => {
// 	<Tab.navigator>
// 		<Tab.Screen name="Home" component={Home} />
// 		<Tab.Screen name="Profile" component={Profile} />
// 	</Tab.navigator>
// }

function StackScree() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="AddImage" component={AddImage} />
		</Stack.Navigator>
	)
}

export function DrawerScree() {
	return (
		<NavigationContainer>
			<Drawer.Navigator drawerContent={() => <DrawerContent />}>
				<Drawer.Screen name="StackScree" component={StackScree} />
				<Drawer.Screen name="Home" component={Home} />
				<Drawer.Screen name="Profile" component={Profile} />
				<Drawer.Screen name="AddImage" component={AddImage} />
			</Drawer.Navigator>
		</NavigationContainer>
	)
}


