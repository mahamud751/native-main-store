import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import CategorySingleCard from './CategorySingleCard'

export default function Category({ navigation }) {
    return (
        <View>
            <View>
                <View>
                    <Text style={styles.titleSection}>Category</Text>
                </View>
                <View style={styles.cardParent}>
                    <TouchableOpacity onPress={() => navigation.navigate('SingleCategory')}>
                        <CategorySingleCard />
                    </TouchableOpacity>
                    <CategorySingleCard />
                    <CategorySingleCard />
                    <CategorySingleCard />
                </View>
                <View style={styles.cardParent}>
                    <CategorySingleCard />
                    <CategorySingleCard />
                    <CategorySingleCard />
                    <CategorySingleCard />
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleSection: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#096266'
    },
    cardParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },

})