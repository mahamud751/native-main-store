import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Details from '../screens/Details'
import SingleCategory from '../components/SingleCategory'
import SingleItem from '../components/SingleItem'
import PlaceOrder from '../screens/PlaceOrder'
import LogOut from '../screens/LogOut'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import CustomDrawer from './CustomDrawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategorySingle from '../screens/CategorySingle'


const Stack = createNativeStackNavigator();
const MainTab = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SingleCategory"
                component={SingleCategory}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CategorySingle"
                component={CategorySingle}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Details"
                component={Details}
            // options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="LogOut"
                component={LogOut}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default function DrawerNav() {
    const Drawer = createDrawerNavigator();

    return (

        <Drawer.Navigator drawerContent={props => <CustomDrawer{...props} />} screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#E9E9E9',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',

            drawerLabelStyle: {
                fontSize: 15,
                color: 'black'
            }

        }}>
            <Drawer.Screen
                name="Home"
                component={MainTab}
                options={{
                    drawerIcon: ({ color }) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    ),
                }}
            />


        </Drawer.Navigator>

    )
}

const styles = StyleSheet.create({})