import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { getAuth } from 'firebase/auth';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { authentication } from '../../firebase'
import { signOut } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';



export default function CustomDrawer(props) {
    const auth = getAuth();
    const user = auth.currentUser;
    const [isLogIn, setIsLogIn] = useState(false)
    const navigation = useNavigation()
    const handleSignOut = () => {
        signOut(authentication)
            .then(() => {
                setIsLogIn(false)
                navigation.navigate("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                contentContainerStyle={{ backgroundColor: '#fff', }}
            >
                <ImageBackground
                    source={{ uri: "https://images.unsplash.com/photo-1614850523527-08bd62441994?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470" }} style={{ padding: 40, marginTop: -40 }}
                >
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/man.png')}
                            style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 12 }}
                        />
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>{user?.email}</Text>
                    </View>

                </ImageBackground>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <ImageBackground

            >
                <View style={{ padding: 20, borderWidth: 1, borderTopColor: '#ccc' }}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name='share-social-outline' size={22} />
                            <Text style={{ fontWeight: 'bold' }}>Contract with us</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ paddingVertical: 18 }}
                        onPress={handleSignOut}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <Ionicons name='exit-outline' size={22} />
                            <Text style={{ fontWeight: 'bold' }}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View >
    )
}

const styles = StyleSheet.create({})