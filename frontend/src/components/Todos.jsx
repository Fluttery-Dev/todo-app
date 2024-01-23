import { useRecoilValue } from "recoil"
import { filteredTodosSelector, todosAtom, useFetchTodos } from "../store/atoms/todos";
import axios from "axios";
import { useEffect } from "react";

export function Todos() {
    const todos = useRecoilValue(filteredTodosSelector);
    const fetchTodos = useFetchTodos();

    useEffect(() => {
        fetchTodos();
    }, []);

    
    return <div>
        {todos.map(todo=>{
           return <Todo todo={todo} fetchTodos={fetchTodos} key={todo._id}></Todo>
        })}
    </div>
}


function Todo({todo,fetchTodos}){
    return <div>
    <h2>{todo.title}</h2>
    <h3>{todo.description}</h3>
    <button onClick={
        async()=>{
            console.log(todo._id)
            await axios.put("http://localhost:3000/completed", {
                id:todo._id,
            })
            fetchTodos();
        }
    }>{todo.completed? "Completed" : "Mark as Done"}</button>
</div>
}