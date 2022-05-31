import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { add_item, delete_cart, remove_item } from "../../redux/actions/cartAction";
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Details(props) {
  const [products, setProducts] = useState([])

  const { id } = props.route.params.item
  const getState = useSelector((state) => state.cartReducer.cart)

  {/* filter for single cart*/ }




  const setState = () => {
    const item = getState.filter((pd) => pd.id === id)
    setProducts(item)
  }


  console.log(products)

  const dispatch = useDispatch()

  const handleAddItem = (e) => {
    dispatch(add_item(e))
  }

  const handleRemoveItem = (e) => {
    dispatch(remove_item(e))
  }
  const navigation = useNavigation()
  const handleCart = (id) => {
    dispatch(delete_cart(id));
    navigation.navigate('Home')
  };
  useEffect(() => {
    setState()
  }, [id])
  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500" }} style={{}}
    >
      <FlatList
        data={products}
        keyExtractor={(key) => key.id}
        renderItem={({ item }) => {
          return (
            <View >
              <View style={{ padding: 30 }}>
                <View style={{ marginTop: 50, padding: 20 }}>
                  <Image
                    source={{
                      uri: item.img,
                    }}
                    style={{ width: "100%", height: 200, borderRadius: 25 }}
                    resizeMode="cover"
                  />
                </View>
                <View style={{ marginTop: 40 }}>
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.category}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <View>
                        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{item.name}</Text>
                      </View>

                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                        <TouchableOpacity
                          onPress={item.qtn <= 1 ? () => handleCart(item.id) : () => handleRemoveItem(item)}
                        >
                          <Text style={[styles.btn, { backgroundColor: "black", color: "white", borderRadius: 10 }]}>-</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Text style={styles.btn}>{item.qtn}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => handleAddItem(item)}
                        >

                          <Text style={[styles.btn, { backgroundColor: "black", color: "white", borderRadius: 10 }]}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View>
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>৳{item.realPrice}</Text>
                    </View>
                    <View style={{ marginVertical: 10 }}>
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed possimus doloribus asperiores rem obcaecati cupiditate consecteturpit,
                        necessitatibus illo distinctio
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text>Delivery Time</Text>
                      <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>Time: 25 Mins</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ marginVertical: 10 }}>
                        <Text>Total Price</Text>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.realPrice * item.qtn}</Text>
                      </View>
                      <View>
                        <TouchableOpacity
                          onPress={() => handleCart(item.id)}
                        >
                          <Ionicons name="remove-circle"
                            size={30}
                          ></Ionicons>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
      />
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 20,
    paddingHorizontal: 8,
  },
});
