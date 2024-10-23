import React from 'react';
import TodoConsumer from './TodoConsumer';
import useTodo from './useTodos.hook';

function Todos({ id }) {
    const { todo, loading } = useTodo(id);
    return (
        todo && !loading ? (
            <TodoConsumer todo={todo} loading={loading} />
        ) : (
            <h3>Loading....</h3>
        )
    )
}

export default Todos