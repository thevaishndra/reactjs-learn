import {createContext, useContext } from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
}) //The TodoContext is created with a default value of an empty object. 

export const useTodo = () => {
    return useContext(TodoContext)//The useTodo custom hook allows functional components to access the TodoContext value.
}

export const TodoProvider = TodoContext.Provider//The TodoProvider component is used to wrap the app or a specific part of the app that needs to access the TodoContext value.


