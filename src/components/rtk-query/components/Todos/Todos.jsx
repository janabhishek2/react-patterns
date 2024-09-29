import React from 'react';
import { useGetAllTodosQuery } from '../../slices/apiSlice';
import TodoItem from '../TodoItem';

function Todos() {
    const {
        isLoading,
        data: todos,
        error
    } = useGetAllTodosQuery();

    if(isLoading) {
        return <h3>Loading!!</h3>
    }
    if(error) {
        return <h3>{error.message}</h3>
    }

    return (
        <ul>
            {
                todos.map(todoItem => {
                    return <TodoItem key={todoItem.id} data={todoItem} />
                })
            }
        </ul>
        
    )
}

export default Todos;
