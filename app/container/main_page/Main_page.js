import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Main_page() {
    return (
        <View style={{flex:1}}>
            <StatusBar
                translucent backgroundColor='transparent'
                barStyle="dark-content"
            />
            <View style={{ position: 'relative' }}>
                <Image
                    style={Styles.Fashion_img}
                    source={require('../../../assets/image/fashion_image_1.jpeg')} />

                <View style={{ width: '50%' }}>
                    <Text style={{ position: 'absolute', color: 'white', bottom: 85, left: 16, fontSize: 45, fontFamily: 'Metropolis-Bold' }}>
                        Fashion Sale
                    </Text>

                </View>
                <View style={{ width: '50%' }}>
                    <TouchableOpacity>
                        <Text style={Styles.check}>
                            Check
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={Styles.container}>
                <View>
                    <View><Text style={Styles.sale}>Sale</Text></View>
                    <View><Text style={Styles.viewall}>View all</Text></View>
                    <Text style={{ bottom: 18, fontSize: 11, fontFamily: 'Metrophobic-Regular', color: '#9B9B9B' }}>Super summer sale</Text>
                </View>
                <View style={Styles.container1}>
                    <View style={Styles.box}>
                        <Image style={Styles.img}
                            source={require('../../../assets/image/main_page_girl_img.png')}>
                        </Image>
                        <Text>kkr</Text>
                    </View>
                </View>
            </View>

        </View>

    )
}

const Styles = StyleSheet.create({
    Fashion_img: {
        width: '100%',
        height: 500
    },
    check: {
        width: 160,
        height: 36,
        backgroundColor: '#DB3022',
        borderRadius: 25,
        position: 'absolute',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: 6,
        fontFamily: 'Metrophobic-Regular',
        fontSize: 14,
        left: 16,
        bottom: 30
    },
    container: {
        width: 481,
        height: 337,
        top: 20,
        left: 30,
    },
    sale: {
        // position:'absolute',
        color: '#222222',
        fontSize: 34,
        fontFamily: 'Metropolis-SemiBold'
    },
    viewall: {
        color: '#222222',
        fontSize: 11,
        fontFamily: 'Metrophobic-Regular',
        // position:'absolute',
        left: 261,
        bottom: 30
    },
    container1: {
        width: 150,
        height: 260,
    },
    box: {
        width: 148,
        height: 184,
    },
    img: {
        width: 190,
        height: 276,
        borderRadius: 10
    }
})