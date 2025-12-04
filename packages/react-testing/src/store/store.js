import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/reducers";
import todosSlice from "./slices/todosSlice";
import { createWebSocketMiddleWare } from "./middleware/wsMiddleware";

const wsMiddleWareFn = createWebSocketMiddleWare("ws://localhost:8080");

const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(todosSlice.middleware, wsMiddleWareFn)
});

export default store;
