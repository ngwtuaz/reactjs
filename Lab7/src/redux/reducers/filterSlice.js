// const initState = {
//   textSearch: "",
//   authorSearch: "",
// };

// const filterReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filter/setTextSearch":
//       return {
//         ...state,
//         textSearch: action.payload,
//       };

//     case "filter/setAuthorSearch":
//       return {
//         ...state,
//         authorSearch: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filterReducer;
import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    textSearch: "",
    authorSearch: "",
  },
  reducers: {
    setTextSearch: (state, action) => {
      state.textSearch = action.payload;
    }, // => { type: filter/setTextSearch (name + tên function) }

    setAuthorSearch: (state, action) => {
      state.authorSearch = action.payload;
    }, // => { type: filter/setAuthorSearch (name + tên function) }
  },
});
