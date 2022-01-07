import React from "react";
import { StyleSheet,Text, View } from "react-native";

export const ToDoScreen = props =>{
    return(
        <View style = {styles.container}>
            <Text>Todo screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  