import apiSlice from './apiSlice';

/* Use apiSlice.injectEndpoints to inject anyh endpoints in a slice */

const deleteApiSlice = apiSlice.injectEndpoints({
    endpoints: function(builder) {
        return {
            deleteTodo: builder.mutation({
                query: (id) => ({
                    url: `/todos/${id}`,
                    method: "DELETE"
                })
            })
        }
    }
});

export const { useDeleteTodoMutation} = deleteApiSlice;
export default deleteApiSlice;

/* Not the recommended way for creating the api as basepath is same */


// const deleteTodoApi = createApi({
//     reducerPath: "deleteTodoApi",
//     baseQuery: fetchBaseQuery({
//         baseUrl: "https://dummyjson.com"
//     }),
//     endpoints: function(builder) {
//         return  {
//             deleteTodo: builder.mutation({
//                 query: (id) => ({
//                     url: `/todos/${id}`,
//                     method: "DELETE"
//                 })
//             })
//         }
//     }
// });

// export const { useDeleteTodoMutation } = deleteTodoApi;
// export default deleteTodoApi;
