import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

function Header({title}) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        backgroundColor: "#121257",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20
    },
    headerText: {
        color: "#fff",
        fontSize: 25,
    }
})

export default Header
