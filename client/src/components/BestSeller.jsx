import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="mt-10">
        {products.map((item, index) => (
          <div className="">
            <ProductCard product={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
