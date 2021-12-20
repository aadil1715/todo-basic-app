import './App.css';
import TodoList from './TodoList';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [todos,setTodos] = useState([]);
  
  const reference = useRef();
  const handleAddTodo = () => {
    let newTodo = {id:uuidv4, name:reference.current.value, completed:false}
    const prevTodos = [...todos,newTodo]
    setTodos(prevTodos);
    console.log(reference.current.value);
    reference.current.value = "";
  }
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text" ref={reference}></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear completed todos</button>
    </>
  )
}

export default App;
