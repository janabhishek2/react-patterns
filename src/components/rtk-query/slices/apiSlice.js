import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: "todoApiSlice",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com"
    }),
    endpoints: function(builder) {
        return {
            getAllTodos: builder.query({
               query: () => "/todos",
               transformResponse: function(data) {
                return data?.todos ?? [];
               }
            }),
            getTodo: builder.query({
                query: (id) => `/todos/${id}`,
                transformErrorResponse: function(error) {
                    return  {
                        ...error,
                        data: {
                            ...error.data,
                            huihui: true
                        }
                    }
                }
            }),
            addTodo: builder.mutation({
                query: (params) => ({
                    url: "/todos/add",
                    method: "POST",
                    body: params
                })
            })
        }
    }
});

export const { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation } = apiSlice;
export default apiSlice;
