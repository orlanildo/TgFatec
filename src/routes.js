import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Ionicons } from '@expo/vector-icons'

const AuthContext = React.createContext();

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Profile from './screens/Profile'
import AddImage from './screens/AddImage'
import FormAddress from './screens/FormAddress'

import DrawerContent from './screens/Menu'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const logado = false

function AuthScree () {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	)
}

function TabScreen() {
	return (
		<Tab.navigator>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.navigator>
	)
}

function StackScree() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} >
			<Stack.Screen name="AuthScree" component={AuthScree} />

			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="AddImage" component={AddImage} />
			<Stack.Screen name="FormAddress" component={FormAddress} />
		</Stack.Navigator >
	)
}

function DrawerScree() {
	return (
		<Drawer.Navigator drawerContent={() => <DrawerContent />}>
			{logado ? (
				<Drawer.Screen name="AuthScree" component={AuthScree} />
			) : (
				<Drawer.Screen name="StackScree" component={StackScree} />
			)}
		</Drawer.Navigator>
	)
}

export default function Routes() {
	return (
		<NavigationContainer>
			<DrawerScree />
		</NavigationContainer>
	)
}



