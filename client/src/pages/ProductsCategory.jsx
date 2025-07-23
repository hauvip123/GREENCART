import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCard from "../components/ProductCard";

const ProductsCategory = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const categoryProduct = categories.find(
    (product) => product.path.toLowerCase() === category
  );

  const filterProduct = products.filter(
    (product) => product.category.toLowerCase() === category
  );

  return (
    <div className="mt-16 px-4 flex flex-col gap-6">
      {categoryProduct && (
        <>
          <div className="flex justify-center">
            <div
              className="px-6 py-3 rounded-full shadow-md transition-all duration-300"
              style={{
                backgroundColor: categoryProduct.bgColor,
              }}
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-gray-800">
                {categoryProduct.text.toUpperCase()}
              </h2>
            </div>
          </div>
          {filterProduct.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {filterProduct.map((product, index) => (
                <div
                  key={index}
                  className="transition-transform transform duration-300 hover:scale-105"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-30">
              Không có sản phẩm nào được tìm thấy trong bộ lọc
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsCategory;
