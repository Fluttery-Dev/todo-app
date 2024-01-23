import { useRecoilValue } from "recoil"
import { filteredTodosSelector, todosAtom, useFetchTodos } from "../store/atoms/todos";

export function Todos() {
    
    useFetchTodos(); // Call the hook at the top level
    const todos = useRecoilValue(filteredTodosSelector);

    return <div>
        {todos.map(todo=>{
           return <Todo todo={todo} key={todo.id}></Todo>
        })}
    </div>
}


function Todo({todo}){
    return <div>
    <h2>{todo.title}</h2>
    <h3>{todo.description}</h3>
    <button>{todo.completed? "Completed" : "Mark as Done"}</button>
</div>
}