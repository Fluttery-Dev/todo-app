import { useState } from "react";
import { useRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/todos";

export default function FilterTodos() {

    const [filter, setFilter] = useRecoilState(filterAtom);
    let s =  {
        padding:10,
        margin:10,
    };

    return <div>
        <input type="text" style={s} placeholder="Enter String to search" 
        onChange={e=>{
            let newFilter = e.target.value;
            setFilter(newFilter);
        }}/> <br />
    </div>
}