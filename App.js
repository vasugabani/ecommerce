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


export default function App() {

  const store = configureStore()
  return (
    <Provider store={store}>
      {/* <Login /> */}
      {/* <Signup/> */}
      {/* <AddShipingAddress/> */}
      {/* <Maainpage/> */}
      {/* <CategoriesTwo/> */}
      {/* <ProductCard/> */}
      {/* <SubCategories2/> */}
      {/* <FavouritePage/> */}
      <Filter/>
    </Provider>
  )
}