import React from 'react';
import useCustomHook from './customHook/useCustomHook.hook';
import TodoConsumer from './useTodos/TodoConsumer';

const baseTodoUrl = "https://jsonplaceholder.typicode.com/todos";

function Hooks() {

    const getTodoData = (todoId) => {
        return fetch(`${baseTodoUrl}/${todoId}`, {
            method: "get"
        })
    };

    const { resource, loading } = useCustomHook(() => getTodoData(1));

    return (
        resource && !loading ? (
            <TodoConsumer todo={resource} />
        ) : (
            <h3>Loading...</h3>
        )
    );
}

export default Hooks;
