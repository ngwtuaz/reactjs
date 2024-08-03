import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './todoSlice'

// import { todoSlice } from './todoSlice';
// import { userSlice } from './userSlice';

export const store = configureStore({
    reducer: reducer,
})