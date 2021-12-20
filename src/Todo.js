import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            {todo.name}
            <input type="checkbox" checked={todo.completed} onChange={!todo.completed}></input>
        </div>
    )
}
