import React, { useEffect } from "react";
import { useLazyGetTodoQuery } from "../../slices/apiSlice";
import { useDeleteTodoMutation } from "../../slices/deleteTodoSlice";

const statusGetter = (completed) => {
        return completed ? "Completed..": "Not complete";
}

function TodoItem({ data }) {
    const { todo, id } = data;
    const [trigger, { data: todoData = {}, isLoading, isError, error = {} }] = useLazyGetTodoQuery();

    const [deleteTodoFn, deleteTodoResult] = useDeleteTodoMutation();

    useEffect(() => {
        if(deleteTodoResult.isSuccess) {
            alert("Successfully deleted the todo!");
        }
    }, [deleteTodoResult.isSuccess]);

    const handleGetStatus = function () {
        trigger("asd");
    };

    const handleDelete = function() {
        deleteTodoFn(id);
    }
   
    return (
        <div style={{ display: "flex", margin: "1rem 0rem" }}>
            <li>{todo}</li>
            <button style={{ marginLeft: "1rem" }} onClick={handleDelete}>
                Delete
            </button>
            <button style={{ marginLeft: "1rem" }} onClick={handleGetStatus}>
                Get status
            </button>
            {
                isLoading && <span style={{ marginLeft: "1rem" }}>Loading...</span>
            }
            {
                Object.keys(todoData).length > 0 && <span style={{ marginLeft: "1rem" }} >{statusGetter(todoData?.completed)}</span>
            }
            {
                isError && <span style={{ marginLeft: "1rem" }} >{error.data.message}</span>
            }
        </div>
    );
}

export default TodoItem;
