import { createSlice } from "@reduxjs/toolkit";

const wsSlice = createSlice({
    name: "ws",
    initialState: {
        messages: [],
        status: "disconnected"
    },
    reducers: {
        connectWs: (state) => {
            state.status = "connected";
        },
        disconnecdWs: (state) => {
            state.status = "disconnected";
        },
        messageReceived: (state, action) => {
            state.messages.push(action.payload);
        }
    }
});

export default wsSlice;
export const { connectWs, disconnecdWs, messageReceived } = wsSlice.actions;
