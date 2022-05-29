import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function FlashSale() {
    return (
        <View>
            <View>
                <View>
                    <Text style={styles.titleSection}>Flash Sale</Text>
                </View>

                <View style={styles.cardParent}>
                    <View style={styles.card}>
                        <Image
                            style={styles.imgStyle}
                            source={{ uri: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500' }}
                            resizeMode='cover'
                        />
                        <View style={styles.cardTitle}>
                            <View>
                                <Text style={{}}>Shoe</Text>
                                <Text style={{ color: '#096266' }}>$120</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 10, marginTop: 4 }}>Stock</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ backgroundColor: 'red', height: 10, width: 25 }}></Text>
                                    <Text style={{ backgroundColor: 'gray', height: 10, width: 15 }}></Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.card}>
                        <Image
                            style={styles.imgStyle}
                            source={{ uri: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500' }}
                            resizeMode='cover'
                        />
                        <View style={styles.cardTitle}>
                            <View>
                                <Text style={{}}>Shoe</Text>
                                <Text style={{ color: '#096266' }}>$120</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 10, marginTop: 4 }}>Stock</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ backgroundColor: 'red', height: 10, width: 25 }}></Text>
                                    <Text style={{ backgroundColor: 'gray', height: 10, width: 15 }}></Text>
                                </View>
                            </View>
                        </View>

                    </View>
                    <View style={styles.card}>
                        <Image
                            style={styles.imgStyle}
                            source={{ uri: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500' }}
                            resizeMode='cover'
                        />
                        <View style={styles.cardTitle}>
                            <View>
                                <Text style={{}}>Shoe</Text>
                                <Text style={{ color: '#096266' }}>$120</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 10, marginTop: 4 }}>Stock</Text>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ backgroundColor: 'red', height: 10, width: 25 }}></Text>
                                    <Text style={{ backgroundColor: 'gray', height: 10, width: 15 }}></Text>
                                </View>
                            </View>
                        </View>

                    </View>



                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleSection: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#096266'
    },
    cardParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },
    card: {
        width: 90,
        backgroundColor: '#C9C4C0',
        borderRadius: 10,

    },
    imgStyle: {
        width: 90,
        height: 80
    },
    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        color: '#096266'
    },
})