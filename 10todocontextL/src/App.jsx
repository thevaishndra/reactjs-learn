import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/ToDoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }//this addTodo function adds a new todo item to the beginning of the todo list, assigning a unique id to the new item, while preserving the existing todo items in the state
  
  const updateTodo = (id, todo) => {//current id
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))//previous to do id
  }//if id matches then update, if it doesn't it's unchanged

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => (todo.id !== id)))//filtering out
  }//if id doesn't matches remove it.

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }//If the IDs match, it returns a new object that is a copy of the original prevTodo object, but with the completed property toggled (i.e., !prevTodo.completed). This effectively updates the todo item's completed status.
  //If the IDs don't match, it returns the original prevTodo object, leaving it unchanged.


  useEffect(() => {
    //This line retrieves the stored todos data from localStorage using the getItem method. The JSON.parse function is used to parse the retrieved string into a JavaScript object
    const todos= JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){//If the retrieved value is not null and has a length greater than 0,
      setTodos(todos)//the setTodos function is called to update the component's state with the retrieved data
    }

  }, [])

  useEffect(() => {//stores the current todos state in localStorage
    localStorage.setItem("todos", JSON.stringify(todos))//convert the JavaScript object to a string, 
  }, [todos])//useEffect hook will run whenever the todos state changes, dependent on todo





  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        
                        <TodoForm />

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                          
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
