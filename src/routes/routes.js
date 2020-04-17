import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import AddImage from '../pages/AddImage'
import Menu from '../pages/Menu'

//import  DrawerRoutes from './drawer.routes'

const Stack = createStackNavigator()
export default function Routes() {
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="AddImage" component={AddImage} />
                <Stack.Screen name="Menu" component={Menu} />

                {/* <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}