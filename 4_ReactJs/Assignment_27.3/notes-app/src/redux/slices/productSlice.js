// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//   name: "productsSlice",
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     loadProducts: (state, actions) => {
//       state.products = actions.payload;
//     },
//   },
// });

// export default productSlice.reducer;

// export const { loadProducts } = productSlice.actions;

//////////////////

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("product/fetch", async () => {
  const response = await fetch("https://api.escuelajs.co/api/v1/products");
  return await response.json();
});

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: function (builder) {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "Success";
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
