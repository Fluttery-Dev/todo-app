import axios from "axios";
import { useEffect } from "react";
import {atom, selector, useRecoilValue, useSetRecoilState} from "recoil";

export const todosAtom = atom({
    key: "todosAtom",
    default:[] 
});


export function useFetchTodos() {
    const setTodos = useSetRecoilState(todosAtom);

    const fetchTodos = async () => {
        const response = await axios.get("http://localhost:3000/todos");
        setTodos(response.data.todos);
    };

    useEffect(() => {
        fetchTodos();
    }, [setTodos]);

    return fetchTodos;
}


export const filterAtom = atom({
    key: "filterAtom",
    default: "",
})

export const filteredTodosSelector = selector({
    key: "filteredListSelector",
    get: ({get})=>{
        const todos = get(todosAtom);
        const filter = get(filterAtom).toLowerCase();
        const filteredTodos = todos.filter((todo)=>todo.title.toLowerCase().includes(filter)|| todo.description.toLowerCase().includes(filter));
        return filteredTodos;
    }
})