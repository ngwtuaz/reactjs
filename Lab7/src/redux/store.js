import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./reducers/filterSlice";
import { imageSlice } from "./reducers/imageSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    imageBox: imageSlice.reducer,
  },
});

export default store;
