import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../slices/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (prevMiddlewares) => {
        return prevMiddlewares().concat(apiSlice.middleware);
    }
});

setupListeners(store.dispatch);

export default store;
