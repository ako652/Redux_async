import { productActions } from "../slices/product";
import { AppDispatch } from "../store";

const productUrl = "https://api.escuelajs.co/api/v1/products";

export function fetchProductData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}
