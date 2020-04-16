import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'


import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'
import AddImage from './pages/AddImage'

const AppStack = createStackNavigator()
const AppDrawer = createDrawerNavigator()

function DrawerMenu() {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Profile" component={Profile} />
            <AppDrawer.Screen name="AddImage" component={AddImage} />
        </AppDrawer.Navigator>
    )
}


export default function Routes() {
    return(
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{ headerShown: false }} 
                initialRouteName={Login}>
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="AddImage" component={AddImage} />
                <AppStack.Screen name="Menu" component={DrawerMenu} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}