import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'

function Welcome() {
    return (
        <ImageBackground style={styles.background} source={require('../assets/background.jpg')}>
            <Text style={styles.headerText}>TEST PROJECT</Text>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton:{
        width:"100%",
        height: 70,
        backgroundColor:"#35404a"
    },
    registerButton:{
        width:"100%",
        height: 70,
        backgroundColor:"#66263f"
    },
    headerText:{
        color: "#fff",
        fontSize: 40,
        position: "absolute",
        top: 100
    }
})

export default Welcome
