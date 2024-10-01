import React, { useEffect, useState } from "react";
import { useAddTodoMutation, useGetAllTodosQuery } from "../../slices/apiSlice";
import TodoItem from "../TodoItem";

function Todos() {
    const { isLoading, data: todos, error, refetch: refetchTodosList } = useGetAllTodosQuery();
    const [addTodo, addTodoResult] = useAddTodoMutation();
    const [todoInput, setTodoInput] = useState("");

    useEffect(() => {
        if(addTodoResult.isSuccess) {
            alert("Todo is added!");
        }
    }, [addTodoResult.isSuccess]);

    useEffect(() => {
        if(addTodoResult?.isError) {
            alert("Can not add todo due to unknown error!");
        }
    }, [addTodoResult?.isError])

    if (isLoading) {
        return <h3>Loading!!</h3>;
    }
    if (error) {
        return <h3>{error.message}</h3>;
    }

    const handleAddTodo = function(e) {
        addTodo({
            completed: false,
            userId: 123,
            todo: todoInput
        }).unwrap().then((data) => {
            console.log(data);
            refetchTodosList();
        })
        setTodoInput("");
    }

    const handleTodoInputChange = function(e) {
        setTodoInput(e.target.value);
    }
    return (
        <div>
            <div style={{ display: "flex", margin: "auto", width: "20%" }}>
                <input type="text" value={todoInput} onChange={handleTodoInputChange} />
                <button disabled={addTodoResult.isLoading} style={{ marginLeft: "1rem" }} onClick={handleAddTodo}>Add todo</button>
            </div>
            <ul>
                {todos.map((todoItem) => {
                    return <TodoItem key={todoItem.id} data={todoItem} />;
                })}
            </ul>
        </div>
    );
}

export default Todos;
