import { createApi } from '@reduxjs/toolkit/query/react';

const apiSlice = createApi({
    endpoints: function(builder) {
        return {
            getTodo: builder.query({
                queryFn: async function() {
                    const resposnse = await fetch('https://dummyjson.com/todos');
                    const data = await resposnse.json();
                    return  {
                        data
                    }
                }
            })
        }
    }
});

export const { useGetTodoQuery } = apiSlice;
export default apiSlice;
