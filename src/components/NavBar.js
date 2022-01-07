import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../theme";

export const NavBar = ({title}) =>{
    return(
        <View style = {style.nvabar}>
            <Text style = {style.text}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    nvabar: {
        height: 100,
        alignItems:"center",
        justifyContent:"flex-end",
        backgroundColor: THEME.DARK
    },
    text: {
        color: THEME.GREY_COLOR,
        fontSize:20
    }
})