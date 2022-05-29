import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function PlaceOrder() {
    return (
        <View>
            <Image
                source={{ uri: 'https://png.pngtree.com/png-vector/20210616/ourmid/pngtree-package-received-delivery-order-with-safety-mask-png-image_3466786.jpg' }}
                resizeMode='contain'
                style={{ width: '100%', height: 500, marginVertical: 50 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})