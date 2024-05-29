import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Main_page() {
    return (
        <View>
            <StatusBar
                translucent backgroundColor='transparent'
                barStyle="dark-content"
            />
            <View style={{ position: 'relative' }}>
                <Image
                    style={Styles.Fashion_img}
                    source={require('../../../assets/image/main_page_fashion_image.jpeg')} />

                <View style={{ width: '50%' }}>            

                </View>
                <View style={{ width: '50%' }}>
                    <TouchableOpacity>
                        <Text style={{ position: 'absolute', color: 'red', fontSize: 40, bottom:20}}>
                            Check
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    Fashion_img: {
        width: 375,
        height: 500
    },
    check: {
        width: '30%',
        height: 50,
        backgroundColor: '#DB3022',
        borderRadius: 50,
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        fontFamily: 'Metropolis-ExtraBold',
        color: '#FFFFFF',
        fontSize: 18,
        padding: 10
    }
})