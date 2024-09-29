import React from 'react';
import { useGetAllTodosQuery, useGetTodoQuery } from '../../slices/apiSlice';
import TodoItem from '../TodoItem';

function Todos() {
    const {
        isLoading,
        data: {
            todo = ''
        } = {},
        error
    } = useGetTodoQuery(3);

    if(isLoading) {
        return <h3>Loading!!</h3>
    }
    if(error) {
        return <h3>{error.message}</h3>
    }

    return (
        <ul>
            {/* {
                data.todos.map(todoItem => {
                    return <TodoItem key={todoItem.id} data={todoItem} />
                })
            } */}
            <li>
               {todo}
            </li>
        </ul>
        
    )
}

export default Todos;
