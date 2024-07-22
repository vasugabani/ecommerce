import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maainpage from '../container/Mainpage/Maainpage';
import FavouritePage from '../container/FavouritePage/FavoritesPage';
import My_Bag from '../container/My_Bag/My_Bag';
import My_Orders from '../container/My_Profile/My_Profile';
import Login from '../container/Login/Login';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BagStack, FavouriteStack, HomeStack, ProductStack, ShopStack } from './StakeNavigator';
import ProductCard from '../container/ProductCard/ProductCard';
import Forget from '../container/Forget/Forget';
import My_Profile from '../container/My_Orders/My_Orders';


const Tab = createBottomTabNavigator();

export default function BottamTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" color={color} size={20} />
                ),
            }} name="Home" component={HomeStack} />

            <Tab.Screen options={{

                tabBarLabel: 'Shop',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="shopping-cart" color={color} size={20} />
                ),
            }} name="Favourite" component={ShopStack} />
            <Tab.Screen options={{
                tabBarLabel: 'Bag',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="shop" color={color} size={20} />

                ),
            }} name="product" component={ProductStack} />
            <Tab.Screen options={{
                tabBarLabel: 'Favourite',
                tabBarIcon: ({ color, size }) => (
                    <EvilIcons name="heart" color={color} size={28} />
                ),
            }} name="My bag" component={BagStack} />
         

            <Tab.Screen options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="user" color={color} size={20} />
                ),
            }} name="order details" component={My_Orders} />
    
        </Tab.Navigator>
    )
}