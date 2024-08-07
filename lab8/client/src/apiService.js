import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await axios.get('http://localhost:3000/products');
   console.log(response);
  return response.data;
});

const fetchSizes = createAsyncThunk('sizes/fetchSizes', async () => {
  const response = await axios.get('http://localhost:3000/categoriesSize');
  return response.data;
});

const checkout = createAsyncThunk('checkout/checkoutProduct', async (dataCheckout) => {
  const response = await axios.post('http://localhost:3000/checkout', dataCheckout );
   console.log(response);
  return response.data;
});

export {
  fetchProducts,
  fetchSizes,
  checkout
};
