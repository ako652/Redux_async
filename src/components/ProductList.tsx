import React, { useEffect } from "react";
import { RootState, AppDispatch } from "../redux/store";
import { useDispatch, useSelector } from "react-redux/";
import ProductItem from "./ProductItem";
import { fetchProductData } from "../redux/thunk/product";

export default function ProductList() {
  const ProductList = useSelector(
    (state: RootState) => state.products.products
  );
  const Loading = useSelector((state: RootState) => state.products.loading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
  return (
    <div>
      {Loading ? (
        <div>loading...</div>
      ) : (
        ProductList.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })
      )}
    </div>
  );
}
