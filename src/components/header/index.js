import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AppLoading from 'expo-app-loading'

export default function Header(){
    return (
        <View>
            <Text style={styles.logo}>firlast</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        fontFamily: 'Montserrat_400Regular',
        color: 'black',
        marginTop: 20,
        fontSize: 20
    }
})