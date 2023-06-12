import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../components/types/type";

type InitialState = {
  products: Product[];
  loading: boolean;
};

const initialState: InitialState = {
  products: [],
  loading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      state.products = action.payload;

      state.loading = false;
    },
  },
});

export const productActions = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
