import { createApi } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    endpoints: function(builder) {
        return {
            getAllTodos: builder.query({
                queryFn: async function() {
                    const resposnse = await fetch('https://dummyjson.com/todos');
                    const data = await resposnse.json();
                    return  {
                        data
                    }
                }
            }),
            getTodo: builder.query({
                queryFn: async function(id) {
                    const resposnse = await fetch(`https://dummyjson.com/todos/${id}`);
                    const data = await resposnse.json();
                    return  {
                        data
                    } 
                }
            })
        }
    }
});

export const { useGetAllTodosQuery, useGetTodoQuery } = apiSlice;
export default apiSlice;
