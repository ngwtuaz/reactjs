import { createSlice } from '@reduxjs/toolkit'

const initState = [
    {
        id: 1,
        taskName: "Hee hee"
    },
    {
        id: 2,
        taskName: "Hee"
    },
    {
        id: 3,
        taskName: "Bee hee"
    },
];

const todoSlice = createSlice({
    name: "todos",
    initialState: initState,
    reducers: {
        deleteTodo(state, action) {
            return state.filter((item) => item.id != action.payload);
        }
    }
})

export const { deleteTodo } = todoSlice.actions;
export const reducer = todoSlice.reducer;