import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: function(builder) {
        return {
            getAllTodos: builder.query({
               query: () => "/todos"
            }),
            getTodo: builder.query({
                query: (id) => `https://dummyjson.com/todos/${id}`
            })
        }
    }
});

export const { useGetAllTodosQuery, useGetTodoQuery } = apiSlice;
export default apiSlice;
