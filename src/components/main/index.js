import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Form from '../form'

export default function Main(){
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Calcule seu IMC</Text>
            <Text style={styles.text}>Informe seu peso e altura.</Text>
            <Form/>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 35
    },
    text: {
        fontFamily: 'Montserrat_400Regular',
    },
    main: {
        marginTop: 40
    }
})