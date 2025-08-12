import React, { useEffect, useState, useSyncExternalStore } from 'react'
import { todosStore } from './todoStore'


function HooksDemo() {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);

    console.log(todos);
    const handleAddTodo = () => {
        todosStore.addTodo();
    };

    return (<div>
            <button onClick={handleAddTodo}>Add a todo</button>
            <ul>
                {
                    todos.map((item) => {
                        return (
                            <li>{item.text}</li>
                        )
                    })
                }
            </ul>
    </div>)
}

function Score() {

    return (<div>
        Score is: {score}
    </div>)
}

export default HooksDemo