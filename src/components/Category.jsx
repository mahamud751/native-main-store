import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


export default function Category({ navigation }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://guarded-garden-69209.herokuapp.com/category')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const navigator = useNavigation()
    return (

        <View>
            <View>
                <Text style={styles.titleSection}>Category</Text>
            </View>
            <View >
                <FlatList
                    data={products}
                    // horizontal
                    numColumns={4}

                    keyExtractor={(key) => key._id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ padding: 3 }}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('CategorySingle', { categoryDetails: item._id })}
                                >
                                    <View style={styles.card}>
                                        <Image
                                            style={styles.imgStyle}
                                            source={{ uri: item.img }}
                                            resizeMode='cover'
                                        />
                                        <View style={{ height: 50 }}>
                                            <Text style={styles.cardTitle}>{item.name}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />



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
        margin: 10
    },
    card: {
        width: 70,
        backgroundColor: '#C9C4C0',
        borderRadius: 10,

    },
    imgStyle: {
        width: 70,
        height: 50
    },
    cardTitle: {
        textAlign: 'center',

        color: '#096266'
    },

})