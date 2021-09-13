import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native'
import Main from './src/components/main'
import AppLoading from 'expo-app-loading'
import Header from './src/components/header'
import { useFonts, Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat'

export default function App(){
    let [fonts] = useFonts({
      Montserrat_400Regular,
      Montserrat_500Medium
    })

    if(!fonts){
        return <AppLoading/>
    }

    return (
      <View style={styles.conteiner}>
        <Header/>
        <StatusBar/>
        <Main/>
      </View>
    )
}

const styles = StyleSheet.create({
  conteiner:{
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 50,
  }
})