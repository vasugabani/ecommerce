import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react'

const data=[
    {
        id:'Dorothy perkins',
        title:'Evening Dress',
        price:
        discount:
        cost:

    }
]

export default function Main_page() {
    return (

        <ScrollView>
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
            </View>

            <View style={{ width: 190, height: 500,marginTop:20,marginHorizontal:30}}>
                <Image style={Styles.Img} source={require('../../../assets/image/main_page_girl_img.png')} />

                <View style={{flexDirection:'row',marginHorizontal:4,columnGap:5,marginTop:10}}>
                    <FontAwesome name="star" size={20} color="#FFBA49" />
                    <FontAwesome name="star" size={20} color="#FFBA49" />
                    <FontAwesome name="star" size={20} color="#FFBA49" />
                    <FontAwesome name="star" size={20} color="#FFBA49" />
                    <FontAwesome name="star" size={20} color="#FFBA49" />
                </View>

                <Text style={{color:'#9B9B9B',fontFamily:'Metrophobic-Regular',fontSize:11,marginHorizontal:4,marginTop:5}}>Dorothy perkins</Text>
                <Text style={{color:'#222222',fontFamily:'Metropolis-Bold',fontSize:16,marginHorizontal:4,marginTop:5}}>Evening Dress</Text>

                <View style={{flexDirection:'row',marginHorizontal:4,marginTop:5}}>
                <Text style={{color:'#9B9B9B'}}>15$ </Text>
                <Text style={{color:'#DB3022',fontFamily:'Metropolis-Bold'}}>12$</Text>
                </View>

            </View>

        </ScrollView>

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
    Img: {
        width: 190,
        height: 276,
        borderRadius:8
    }
})