import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [products, searchQuery]);

  const inStockProducts = filteredProducts.filter((product) => product.inStock);

  return (
    <div className="mt-14 px-4 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <p className="text-3xl font-semibold uppercase text-gray-800 tracking-wide">
          All Products
        </p>
        <div className="w-20 h-1 mt-2 bg-primary rounded-full" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
        {inStockProducts.length > 0 ? (
          inStockProducts.map((product, index) => (
            <div
              key={index}
              className="transition-all duration-300 hover:scale-105"
            >
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-2xl font-bold text-amber-800 py-12 animate-pulse">
            Không tồn tại sản phẩm nào
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
