import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://picsum.photos/v2/list?page=1&limit=15");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);

export const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

// const initState = {
//   images: [],
//   loading: false,
//   error: null,
// };

// const imageReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "images/fetchImagesRequest":
//       return {
//         ...state,
//         loading: true,
//       };

//     case "images/fetchImagesDone":
//       return {
//         ...state,
//         loading: false,
//         images: [...action.payload],
//       };

//     case "images/fetchImagesFail":
//       return {
//         ...state,
//         loading: false,
//         error: true,
//       };

//     default:
//       return state;
//   }
// };

// export default imageReducer;
