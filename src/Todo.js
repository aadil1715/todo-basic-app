import React from 'react'


export default function Todo({todo}) {
    const fn1 = () => {
        todo.completed = true
    }
    
    return (
        <div>
            {todo.name}
            <input type="checkbox" checked={todo.completed} onChange={!todo.completed} onClick={fn1}></input>
        </div>
    )
}
