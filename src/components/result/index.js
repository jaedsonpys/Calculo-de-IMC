import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default function Result(props){
    return (
        <View style={styles.result}>
            <Text style={styles.imc}>{props.imc}</Text>
            <Text style={styles.message}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imc: {
        fontSize: 50,
        fontFamily: 'Montserrat_600SemiBold',
        color: 'black'
    },
    message: {
        fontSize: 15,
        fontFamily: 'Montserrat_500Medium',
        color: 'black'
    },
    result: {
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
})