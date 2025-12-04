import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import todosSlice from '../slices/todosSlice';
import wsSlice from "../slices/webSocketSlice";

const appReducer = combineReducers({
    [userSlice.name]: userSlice.reducer,
    [wsSlice.name]: wsSlice.reducer,
    [todosSlice.reducerPath]: todosSlice.reducer,
});

export default appReducer;
