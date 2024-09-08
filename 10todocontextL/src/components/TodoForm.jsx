import React, { useState } from 'react'
import { useTodo } from '../context/ToDoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const{ addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()//Prevent the default form submission behavior
        if (!todo) return //Check if the todo item is not empty

        addTodo({todo, completed: false})//Add the new Todo item to the list with a completed status of false
        setTodo("")//Clear the input field after adding the Todo item
    }

    return (
        <form  onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //whenever the todo state changes, the input field's value will be updated accordingly
                onChange={(e) => setTodo(e.target.value)}// This updates the todo state variable with the new value, which in turn updates the input field's value due to the one-way data binding
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

