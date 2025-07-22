import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
const BestSeller = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((item, index) => {
            return <ProductCard product={item} key={index} />;
          })}
      </div>
    </div>
  );
};

export default BestSeller;
