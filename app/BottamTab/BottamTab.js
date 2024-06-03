import { View, Text } from 'react-native'
import React from 'react'
import Login from '../container/Login/Login'
import Signup from '../container/Signup/Signup'
import Home from '../container/Home/Home'
import Shop from '../container/Shop/Shop'
import Favourite from '../container/Favorite/Favourite'
import Profile from '../container/Profile/Profile'

export default function BottamTab() {
    return (
        <Tab.Navigator>
        <Tab.Screen options={{
            headerShown: false
        }} name="Home"
            component={DrawerNavigator} />

        <Tab.Screen 
            options={{
                headerShown: true
            }} 
            name="City"

            component={City} />
        <Tab.Screen name="Product" component={Home} />
        <Tab.Screen name="StyleDemo1" component={Shop} />
        <Tab.Screen name="StyleDemo2" component={Favourite} />
        <Tab.Screen name="StyleDemo3" component={Profile} />
    </Tab.Navigator>
    )
}