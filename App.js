import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { NavBar } from './src/components/NavBar';
// import { toDoState } from './src/context/todo/ToDoState';
// import { MainLayout } from './src/mainLayout';
import { MainScreen } from './src/screens/MainScreen';
import { ToDoScreen } from './src/screens/ToDoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodo] = useState([])
  
  const addTodo = (title) => {
    setTodo(prev => [...prev, {id: Date.now().toString(), title}] )
  }
  const removeToDo = (id) => {
    setTodo(prev => prev.filter(todo => todo.id !== id))
  }

  // const editToDo = (id) => {

  // }

  let contet =  <MainScreen todos={todos} removeToDo={removeToDo} addTodo={addTodo}/>

  if(todoId){
    contet = <ToDoScreen></ToDoScreen>
  }
  return (
    <View>
      <NavBar title = "Todo app navbar!"/>
      <View>
        {contet}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
