import { createSlice } from '@reduxjs/toolkit';
import { fetchSizes } from '../apiService';

const initialState = {
  selectedSize: null,
  sizes: [],
};

const sizeSlice = createSlice({
  name: 'size',
  initialState,
  reducers: {
    setSize(state, action) {
      state.selectedSize = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSizes.fulfilled, (state, action) => {
      state.sizes = action.payload;
    });
  },
});

export const { setSize } = sizeSlice.actions;
export default sizeSlice.reducer;
