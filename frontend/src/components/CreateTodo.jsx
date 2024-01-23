import { useState } from "react";
import axios from "axios";
import { useFetchTodos } from "../store/atoms/todos";

export function CreateTodo() {
    const fetchTodos = useFetchTodos();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    let s =  {
        padding:10,
        margin:10,
    };

    return (
    <div>
        <input type="text" style={s} placeholder="Title" 
        onChange={e=>{
            let newTitle = e.target.value;
            setTitle(newTitle);
        }}/> <br />

        <input type="text" style={s}placeholder="Description"
        onChange={e=>{
            let newDescription = e.target.value;
            setDescription(newDescription);
        }}/> <br />

        <button style={s} onClick={async()=>
            {
                await axios.post('http://localhost:3000/todo',{
                title: title,
                description: description,
                });
                fetchTodos();
                alert("Todo Added");
        }
        }>Add Todo</button>
    </div>);
}