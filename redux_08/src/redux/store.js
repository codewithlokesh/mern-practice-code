import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import todoReducer from "./todoSlice.js"
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    },
})