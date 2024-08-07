import { configureStore } from '@reduxjs/toolkit';
import sizeReducer from './SizeSlice';
import cartReducer from './CartSlice'
import productReducer from './ProductSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    size: sizeReducer,
  },
});

export default store;
