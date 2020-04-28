import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Profile from './screens/Profile'
import AddFurniture from './screens/AddFurniture'

import DrawerContent from './components/Menu'
import Header from './components/Header'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const AuthContext = React.createContext();
const logado = false

function AuthScree() {
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
			<Tab.Screen name="AddFurniture" component={AddFurniture} />
		</Tab.navigator>
	)
}

function StackScree() {
	return (
		<Stack.Navigator screenOptions={{ header:() => <Header /> }} >
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Profile" component={Profile} />
			<Stack.Screen name="AddFurniture" component={AddFurniture} />
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



