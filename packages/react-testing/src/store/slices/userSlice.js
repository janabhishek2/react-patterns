import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    reducerPath: "userSliceReducer",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
    }
});

export default userSlice;
export const { addUser } = userSlice.actions;
