import React from 'react'

function TodoConsumer(props) {
    const { userId, id, title, completed } = props?.todo;
    return (
       <div>
        <h2>Todo data...</h2>

        <p>User Id: {userId}</p>
        <p>Todo id: {id}</p>
        <p>Title: {title} </p>
        <p>Completed: {completed ? "Completed": "Not completed"}</p>

       </div>
    )
}

export default TodoConsumer