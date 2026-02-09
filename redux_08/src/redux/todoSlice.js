import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: { list: [] },
    reducers: {
        addTodos: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
                completed: false
            }
            state.list.push(newTodo);
        },

        removeTodos: (state, action) => {
            const id = action.payload;
            state.list = state.list.filter((todo)=>todo.id !== id)
        },

        toggleTodo:(state, action)=>{
            const id = action.payload;
            const todo = state.list.find((todo)=>todo.id === id)
            if(todo){
                todo.completed = !todo.completed
            }
        },

        ClearAll: (state)=>{
            state.list = []
        }
    }
});

export const {addTodos, removeTodos, toggleTodo, ClearAll} = todoSlice.actions
export default todoSlice.reducer