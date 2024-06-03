import React, { useEffect, useState } from 'react';

const baseTodoUrl = "https://jsonplaceholder.typicode.com/todos";

const useTodo = (todoId) => {
    const [todo, setTodo] = useState(false);
    const [loading, setLoading] = useState(false);

    const getTodo = (id) => {
        setLoading(true);
        fetch(`${baseTodoUrl}/${todoId}`, {
            method: "get"
        }).then(response => response.json())
        .then((response) => {
            setTodo(response);
        }).catch((err) => {
            setTodo(null);
        }).finally(() => {
            setLoading(false);
        })
    };

    useEffect(() => {
        !todo && getTodo(todoId);
    }, [todoId]);

    return {
        todo,
        loading
    };
};

export default useTodo;
