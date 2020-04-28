import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import Profile from './screens/Profile'
import AddFurniture from './screens/AddFurniture'

import DrawerContent from './components/DrawerContent'
import Header from './components/Header'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const AuthContext = React.createContext();
const logado = true


function DrawerScree() {
	return (
		<Drawer.Navigator >
			<Drawer.Screen name="Home" component={Home} />
			<Drawer.Screen name="Profile" component={Profile} />
			<Drawer.Screen name="AddFurniture" component={AddFurniture} />
			<Drawer.Screen name="Logout" component={Login} />
		</Drawer.Navigator>
	)
}

function Navigation() {
	return (
		<>
			{logado === false ? (
				<Stack.Navigator headerMode='none' >
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
				</Stack.Navigator>
				) : (
				<Stack.Navigator screenOptions={{ header: () => <Header />  }} >
					<Stack.Screen name="DrawerScree" component={DrawerScree} />
				</Stack.Navigator >
			)}
		</>
	)
}

export default function Routes() {
	return (
		<NavigationContainer>
			<Navigation />
		</NavigationContainer>
	)
}



