import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Profile from './screens/Profile'
import AddFurniture from './screens/AddFurniture'

const Tab = createBottomTabNavigator()

export default function Footer() {
    return(
        <Tab.navigator>
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', }} />
            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', }} />
            <Tab.Screen name="AddFurniture" component={AddFurniture} options={{ tabBarLabel: 'AddFurniture', }} />
        </Tab.navigator>
    )
} 