import React from 'react'

function TodoItem({ data }) {
    const { todo } = data;
    return (
        <li>{todo}</li>
    )
}

export default TodoItem