
import { RecoilRoot } from 'recoil'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'
import FilterTodos from './components/FilterTodos'

function App() {
    return (
      <RecoilRoot>
        <CreateTodo/>
        <FilterTodos></FilterTodos>
        <Todos/>
      </RecoilRoot>
    )
}

export default App
