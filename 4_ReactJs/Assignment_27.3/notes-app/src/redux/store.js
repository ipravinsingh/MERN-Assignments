import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    productReducer: productSlice,
    cartReducer,
  },
});
