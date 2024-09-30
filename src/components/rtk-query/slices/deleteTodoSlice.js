import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const deleteTodoApi = createApi({
    reducerPath: "deleteTodoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: function(builder) {
        return  {
            deleteTodo: builder.mutation({
                query: (id) => ({
                    url: `/todos/${id}`,
                    method: "DELETE"
                })
            })
        }
    }
});

export const { useDeleteTodoMutation } = deleteTodoApi;
export default deleteTodoApi;
