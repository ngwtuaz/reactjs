import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../apiService';


const initialState ={
  items: [], 
  status: 'idle', 
  error: null, 
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'Đang tải';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'Thành công';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'Thất bại';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
