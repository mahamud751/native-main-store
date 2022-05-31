import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { add_item, delete_cart, remove_item } from "../../redux/actions/cartAction";
import Ionicons from 'react-native-vector-icons/Ionicons'


export default function Cart() {
  const getState = useSelector((state) => state.cartReducer.cart)
  const [price, setPrice] = useState(0);
  const navigation = useNavigation()
  let shipping = 40
  let vat = 120
  const total = () => {
    let price = 0;

    getState.map((pd) => {
      price = pd.realPrice * pd.qtn + price
      const grandTotal = price + shipping + vat
      setPrice(grandTotal);
    });
  };
  const handleAddItem = (e) => {
    dispatch(add_item(e))
  }

  const handleRemoveItem = (e) => {
    dispatch(remove_item(e))
  }
  const handleCart = (id) => {
    dispatch(delete_cart(id));
  };
  useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();
  return (
    <ScrollView >
      <View>
        {getState.length ?
          <>
            <FlatList
              data={getState}
              keyExtractor={(key) => key._id}
              renderItem={({ item }) => {
                return (
                  < >
                    <View style={{ paddingHorizontal: 30, backgroundColor: 'whitesmoke' }}>

                      <View style={{ marginTop: 60, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#F8F8F8', padding: 10 }}>
                        <View style={{}}>
                          <Image
                            source={{
                              uri: item.img,
                            }}
                            style={{ width: 80, height: 80 }}
                          />
                        </View>
                        <View>

                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'center', fontWeight: "bold" }}>{item.name}</Text>
                          </View>
                          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, width: 130, padding: 10 }}>
                            <TouchableOpacity
                              onPress={item.qtn <= 1 ? () => handleCart(item._id) : () => handleRemoveItem(item)}
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
                          <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: 40 }}>{item.realPrice * item.qtn}</Text>


                        </View>
                        <View>
                          <TouchableOpacity
                            onPress={() => handleCart(item.id)}
                            style={{ marginTop: 37 }}
                          >
                            <Ionicons name="remove-circle"
                              size={30}
                            ></Ionicons>
                          </TouchableOpacity>
                        </View>
                      </View>

                    </View>
                  </>
                )
              }}
            />
            <View style={{ paddingHorizontal: 30, }}>
              <View style={{ marginTop: 100 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 16, marginTop: 10 }}>Shipping charge</Text>
                  <Text style={{ fontSize: 16, marginTop: 10, fontWeight: "bold" }}>{shipping}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                  <Text style={{ fontSize: 16 }}>Vat</Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>{vat}</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, borderTopWidth: 2, borderColor: 'gray' }}>
                  <Text style={{ fontSize: 16 }}>Sub total</Text>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>{price}</Text>
                </View>
              </View>


              <View style={{ marginTop: 30 }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PlaceOrder')}
                  style={{ width: "100%", backgroundColor: "#C24448", padding: 16, borderRadius: 50 }}>
                  <Text style={{ color: "white", textAlign: "center" }}>Place Order</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
          : <View>
            <Image
              source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/confusing-woman-due-to-empty-cart-4558760-3780056.png' }}
              resizeMode='contain'
              style={{ width: '100%', height: 300, marginVertical: 120 }}
            />
          </View>}
        {/* </ImageBackground> */}
      </View>
    </ScrollView >

  );
}

const styles = StyleSheet.create({
  btn: {
    fontSize: 20,
    paddingHorizontal: 8,
  },
});
