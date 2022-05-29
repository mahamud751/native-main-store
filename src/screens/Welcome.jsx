import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'


export default function Welcome({ navigation }) {
    return (
        <View>
            <View style={styles.headerPart}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Welcome</Text>
                <Text style={{ marginTop: 7 }}>Create an account and access thousand of products</Text>
            </View>
            <View>
                <Image
                    source={{ uri: 'https://freedesignfile.com/upload/2019/11/E-commerce-cartoon-illustration-vector.jpg' }}
                    style={{ width: '100%', aspectRatio: 1 }}
                />
            </View>
            <View style={{}}>
                <View style={styles.footerPartStyle}>
                    <TouchableOpacity style={styles.footerButton}>
                        <Text style={styles.footerButtonText}>Getting started</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Already have a account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={{ color: '#1F7073' }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerPart: {
        marginTop: 60,
        marginLeft: 30,
        width: 230
    },
    footerPartStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        borderWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#EAC3D8'
    },
    footerButton: {

        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,
        width: 140
    },
    footerButtonText: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#1F7073',
        fontWeight: 'bold'
    }
})