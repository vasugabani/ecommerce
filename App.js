import { View, Text } from 'react-native'
import React from 'react'

import { Provider } from 'react-redux'
import Login from './app/container/Login/Login'
import { configureStore } from './app/redux/slice/store'
import AddShipingAddress from './app/container/AddShippingAdress/AddShipingAddress'
import Signup from './app/container/Signup/Signup'
import Maainpage from './app/container/Mainpage/Maainpage'
import CategoriesTwo from './app/container/CategoriesTwo/CategoriesTwo'
import ProductCard from './app/container/ProductCard/ProductCard'
import SubCategories2 from './app/container/SubCategories2/SubCategories2'
import FavouritePage from './app/container/FavouritePage/FavoritesPage'
import Filter from './app/container/Filter/Filter'
import Rating from './app/container/Rating/Rating'
import My_Orders from './app/container/My_Profile/My_Profile'
import My_Bag from './app/container/My_Bag/My_Bag'
import My_Profile from './app/container/My_Orders/My_Orders'
import Success from './app/container/Success/Success'
import {NavigationContainer} from '@react-navigation/native';
import BottamTab from './app/Navigation/BottamTab'
import Forget from './app/container/Forget/Forget'

export default function App() {

  const store = configureStore()
  return (
   
      <Provider store={store}>
           <NavigationContainer>
         <BottamTab/>
        </NavigationContainer>
       {/* <Forget/> */}
        {/* <Signup/> */}
        {/* <AddShipingAddress/> */}
        {/* <Maainpage/> */}
        {/* <CategoriesTwo/> */}
        {/* <ProductCard/> */}
        {/* <SubCategories2/> */}
        {/* <FavouritePage/> */}
        {/* <Filter/> */}
        {/* <Rating/> */}
        {/* <My_Orders/> */}
        {/* <My_Bag/> */}
        {/* <My_Profile/> */}
        {/* <Success/> */}
        {/* <Drawer /> */}
      </Provider>
       
  )
}