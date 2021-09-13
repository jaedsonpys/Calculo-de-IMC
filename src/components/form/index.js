import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import Result from '../result'

export default function Form(){

    const [height, setHeight] = useState(null)
    const [width, setWidth] = useState(null)
    const [imc, setImc] = useState(null)
    const [message, setMessage] = useState(null)

    const validate = ()=>{
        if(height != null && width != null){
            var h = parseFloat(height.toString().replace(',','.'))
            var w = parseFloat(width.toString().replace(',','.'))
            console.log(h)
            setImc((w / (h*h)).toFixed(2))
            setMessage('É seu IMC atual')
            Keyboard.dismiss()
        }
    }

    return (
        <View style={styles.form}>
            <View>
                <Text>Altura</Text>
                <TextInput style={styles.input} placeholder='Ex. 1.75' keyboardType='numeric' onChangeText={(e)=>setHeight(e)}/>
                <Text>Peso</Text>
                <TextInput style={styles.input} placeholder='Ex. 75.94' keyboardType='numeric' onChangeText={(e)=>setWidth(e)}/>
                <TouchableOpacity style={styles.button} onPress={validate}>
                    <Text style={styles.buttonText}>Calcular</Text>
                </TouchableOpacity>
            </View>
            <Result imc={imc} message={message}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        marginTop: 50
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#e7eae2',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
        marginTop: 5
    },
    button:{
        backgroundColor: 'black',
        height: 40,
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText:{
        color: 'white',
        fontFamily: 'Montserrat_500Medium'
    }
})