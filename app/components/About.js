import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

function About() {
    return (
        <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>ABOUT PAGE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutContainer:{
        flex: 1,
        alignItems: 'center'
    },
    aboutText: {
        fontSize: 20
    }
})

export default About
