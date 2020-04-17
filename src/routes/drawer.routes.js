import { createDrawerNavigator } from '@react-navigation/drawer'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import AddImage from '../pages/AddImage'


const Drawer = createDrawerNavigator()
export default function DrawerRoutes() {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="AddImage" component={AddImage} />
        </Drawer.Navigator>
    )
}