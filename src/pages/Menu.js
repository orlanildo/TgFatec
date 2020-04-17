// import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import Profile from './Profile'
import AddImage from './AddImage'


const Drawer = createDrawerNavigator()
export default function DrawerMenu() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="AddImage" component={AddImage} />
        </Drawer.Navigator>
        // </NavigationContainer>
    )
}

