import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import deleteTodoApi from "../slices/deleteTodoSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [deleteTodoApi.reducerPath]: deleteTodoApi.reducer
    },
    middleware: (prevMiddlewares) => {
        return prevMiddlewares().concat(apiSlice.middleware).concat(deleteTodoApi.middleware);
    }
});

export default store;
