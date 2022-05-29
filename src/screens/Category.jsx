import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Products from '../../products'

export default function Category() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://floating-plateau-70387.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const dispatch = useDispatch()
    return (
        <View>
            <View>
                <Image

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})