import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    reducerPath: "todoApiSlice",
    // refetch true: rtk-query does not make isLoading true, fetches data in background and updates it.
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["GetAllTodosTag"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://dummyjson.com",
        prepareHeaders: (headers)=>{
            // used to set common headers for all apis
            headers.set("r-1",'d');
            return headers;
        }
    }),
    endpoints: function(builder) {
        return {
            getAllTodos: builder.query({
               query: () => {
                return {
                    url: "/todos",
                    // used to set custom headers for one api.
                    headers: {
                        "authorisation": "empty"
                    }
                }
               },
               providesTags: ["GetAllTodosTag"],
               transformResponse: function(data) {
                return data?.todos ?? [];
               },
               
            // cache time 3s after this data is refetched.
            // by default rtk-query keeps data cached for 60seconds.
            // if we re-mount component we get the cached data.
               keepUnusedDataFor: 1
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
                }),
                invalidatesTags: ["GetAllTodosTag"]
            })
        }
    }
});

export const { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation } = apiSlice;
export default apiSlice;
