import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Products from '../../Products'
import { add_item } from '../../redux/actions/cartAction'
import { useDispatch, useSelector } from 'react-redux'


export default function CategorySingle({ navigation, route }) {
    const [products, setProducts] = useState([])

    const _id = route.params.categoryDetails
    console.log(_id)

    useEffect(() => {
        fetch(`https://guarded-garden-69209.herokuapp.com/category/${_id}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            })
    }, [])
    console.log(products)


    const dispatch = useDispatch()

    const handleAddItem = (e) => {
        dispatch(add_item(e))
    }

    // useEffect(() => {
    //     setState()
    // }, [_id])
    return (

        <FlatList
            data={products}
            keyExtractor={(key) => key._id}
            renderItem={({ item }) => {
                return (
                    <View>
                        <View>
                            <Image source={{ uri: item.img }} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginVertical: 6 }}>৳{item.realPrice}</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Details', { item }, handleAddItem(item))}
                                style={{ padding: 10, backgroundColor: 'red', borderRadius: 25, width: 120 }}
                            >
                                <Text style={{ textAlign: 'center', color: 'white' }} >Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }}

        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
})