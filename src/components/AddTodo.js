import React,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { THEME } from "../theme";

export const AddTodo = ({onSubmit}) =>{

    const [text,setText] = useState("")

    const pressHandler = () => {
        if(text.trim()){
            onSubmit(text)
            setText("")
        }
    }

    return(
        <View style = {style.block}>
            <TextInput placeholder="Создать задачу" onChangeText={setText} value={text} style = {style.input}/>
            <Button onPress={pressHandler} title="Добавить"/>
        </View>
    )
}

const style = StyleSheet.create({
    block: {
        flexDirection:"row",
        margin: 10
    },
    input: {
        width:"70%",
        borderStyle: "solid",
        borderWidth:2,
        borderBottomColor:THEME.DARK,
    }
})