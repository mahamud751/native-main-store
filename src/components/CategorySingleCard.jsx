import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


export default function CategorySingleCard() {
    const navigation = useNavigation()
    return (

        <TouchableOpacity
            onPress={() => navigation.navigate('SingleCategory')}
        >
            <View style={styles.card}>
                <Image
                    style={styles.imgStyle}
                    source={{ uri: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764' }}
                    resizeMode='cover'
                />
                <Text style={styles.cardTitle}>T-Shirts</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
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
        paddingVertical: 10,
        color: '#096266'
    },
})