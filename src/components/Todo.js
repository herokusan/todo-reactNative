import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export const Todo = ({todo, onRemove}) =>{
    return(
        <TouchableOpacity activeOpacity={0.5} onLongPress={onRemove.bind(null, todo.id) }>
            <View style = {style.contaoner}>
                <Text style = {style.text}>{todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    contaoner: {
        width:"97%",
        borderStyle:"solid",
        borderColor:THEME.DARK,
        borderWidth:1,
        margin:5,
        padding:5,
    },
    text: {
        color:THEME.DARK,
        fontSize: 35
    }
})