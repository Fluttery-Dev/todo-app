import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'

function App() {

  const [todos, updateTodos] = useState([]);

  function setTodos(){
    fetch("http://localhost:3000/todos").then(async(res) =>{
    let t = await res.json();
    let newTodos = t.todos;
    updateTodos(newTodos);
  });
  }
  setTodos();
    return (
      <div>
      <CreateTodo set={setTodos}/>
      <Todos todos={todos}></Todos>
      </div>
    )
}

export default App
