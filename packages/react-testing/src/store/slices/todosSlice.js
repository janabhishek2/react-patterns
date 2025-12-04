import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWrapper } from './baseQueryWrapper';

const todosSlice = createApi({
    reducerPath: "todosSlice",
    baseQuery: baseQueryWrapper,
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos"
        })
    })
});

export const { useGetTodosQuery } = todosSlice;
export default todosSlice;
