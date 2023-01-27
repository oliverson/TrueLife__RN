import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.headerText}>
            True Life
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height: 85,
        width: "100%",
        backgroundColor: "#FA748F",
        paddingBottom: 10,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 8
    },
    headerText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }
})