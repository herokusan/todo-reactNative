import React, {useReducer} from "react";
import { ToDoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";

export const toDoState = ({childern}) => {
    const initialState = {
        todos: [{id: "1", title: "To do!"}]
    }
    const [state, dispatch] = useReducer(todoReducer, initialState)
    return( 
        <ToDoContext.Provider value = {{
            todos: state.todos
        }}>
            {childern}
        </ToDoContext.Provider>
    )
}