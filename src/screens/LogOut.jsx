import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
// import useAuth from '../../hooks/useAuth'
import { authentication } from '../../firebase'
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";


export default function LogOut() {
    // const { user } = useAuth()
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
        <View style={{ marginVertical: 120 }}>
            <TouchableOpacity
                onPress={handleSignOut}
            >
                <Text>email: {user?.email}</Text>
                <Text>Sign out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})