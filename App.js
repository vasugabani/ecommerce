import { View, Text, StyleSheet, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import React from 'react'
import Signup from './app/container/Signup/Signup';
import Login from './app/container/Login/Login';
import Main_page from './app/container/main_page/Main_page';
import CategoriesTwo from './app/container/CategoriesTwo/CategoriesTwo';

export default function App() {
  return (
    <>
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <Main_page/> */}
    <CategoriesTwo/>
    </>
//     <View style={{ backgroundColor: '#F9F9F9' }}>
//       <Text style={{ padding: 10 }}><FontAwesome name='angle-left' size={50} color='#222222' /></Text>
//       <Text style={{ fontFamily: 'Metropolis-Bold', padding: 10, fontSize: 25, color: '#222222' }}>Sign up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder='Name'
//         autoCapitalize="none"
//         placeholderTextColor='#9B9B9B'
//       />
//       <TextInput
//         style={styles.input}
//         placeholder='Email'
//         secureTextEntry={true}
//         autoCapitalize="none"
//         placeholderTextColor='#9B9B9B'
//       />
//       <TextInput
//         style={styles.input}
//         placeholder='Password'
//         autoCapitalize="none"
//         placeholderTextColor='#9B9B9B'
//       />
//       <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', padding: 10, alignItems: 'center' }}>
//         <Text style={{ color: '#222222' }}>Already have an account</Text>
//         <FontAwesome name='long-arrow-right' size={30} color='#DB3022' /></View>
//     </View>
  )
}

// // const styles = StyleSheet.create({
// //   input: {
// //     width: 350,
// //     height: 55,
// //     backgroundColor: '#FFFFFF',
// //     margin: 10,
// //     padding: 8,
// //     color: 'black',
// //     borderRadius: 14,
// //     fontSize: 18,
// //     fontWeight: '500',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })