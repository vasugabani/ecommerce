import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maainpage from '../container/Mainpage/Maainpage';
import FavouritePage from '../container/FavouritePage/FavoritesPage';
import My_Bag from '../container/My_Bag/My_Bag';
import My_Orders from '../container/My_Orders/My_Orders';
import Login from '../container/Login/Login';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { HomeStack } from './StakeNavigator';
import ProductCard from '../container/ProductCard/ProductCard';
import Forget from '../container/Forget/Forget';


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

                tabBarLabel: 'shop',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="shopping-cart" color={color} size={20} />
                ),
            }} name="Favourite" component={FavouritePage} />
                   <Tab.Screen options={{
                tabBarLabel: 'My bag',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="shop" color={color} size={20} />
                ),
            }} name="My bag" component={My_Bag} />
        
            <Tab.Screen options={{
                tabBarLabel: 'profile',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="reorder" color={color} size={20} />
                ),
            }} name="order details" component={My_Orders} />
            {/* <Tab.Screen       options={{
                tabBarLabel: 'personal',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="personal-injury" color={color} size={20} />
                ),
            }}  name="personal" component={Login} /> */}
      
             <Tab.Screen  name="product" component={ProductCard} />
             {/* <Tab.Screen  name="forget" component={Forget} /> */}
        </Tab.Navigator>
    )
}