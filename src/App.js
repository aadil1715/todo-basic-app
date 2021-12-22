import './App.css';
import TodoList from './TodoList';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [todos,setTodos] = useState([]);
  const [count,setCount] = useState(0);
  
  const reference = useRef();
  const handleAddTodo = () => {
    let newTodo = {id:uuidv4, name:reference.current.value, completed:false}
    const prevTodos = [...todos,newTodo]
    setTodos(prevTodos);
    setCount(count+1);
    console.log(reference.current.value);
    reference.current.value = "";
  }
  const handleRemoveTodo = () => {
    setTodos([]);
    setCount(0);
  }
  return (
    <>
    <TodoList todos={todos}/>
    <input type="text" ref={reference}></input>
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleRemoveTodo}>Clear completed todos</button>
    <p>{count} left to do</p>
    </>
  )
}

export default App;
