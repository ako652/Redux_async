import React from "react";
import { Product } from "./types/type";
type Prop = {
  product: Product;
};

export default function ProductItem({ product }: Prop) {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  );
}
