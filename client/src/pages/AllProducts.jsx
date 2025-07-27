import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCart from "../components/ProductCart";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");

  // Get unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
      let filtered = products;

      // Filter by search query
      if (searchQuery.length > 0) {
        filtered = filtered.filter(
          (product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      // Filter by category
      if (filterCategory !== "all") {
        filtered = filtered.filter(
          (product) => product.category === filterCategory
        );
      }

      // Sort products
      filtered = filtered.sort((a, b) => {
        switch (sortBy) {
          case "name":
            return a.name.localeCompare(b.name);
          case "price-low":
            return a.offerPrice - b.offerPrice;
          case "price-high":
            return b.offerPrice - a.offerPrice;
          case "discount":
            const discountA = ((a.price - a.offerPrice) / a.price) * 100;
            const discountB = ((b.price - b.offerPrice) / b.price) * 100;
            return discountB - discountA;
          default:
            return 0;
        }
      });

      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [products, searchQuery, sortBy, filterCategory]);

  const inStockProducts = filteredProducts.filter((product) => product.inStock);

  // Loading skeleton component
  const ProductSkeleton = () => (
    <div className="animate-pulse">
      <div className="bg-gray-200 rounded-2xl p-4 space-y-4">
        <div className="bg-gray-300 h-32 rounded-xl"></div>
        <div className="space-y-2">
          <div className="bg-gray-300 h-4 rounded w-3/4"></div>
          <div className="bg-gray-300 h-4 rounded w-1/2"></div>
          <div className="bg-gray-300 h-6 rounded w-2/3"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mt-14 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Enhanced Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-4">
          All Fresh Products
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Discover our complete collection of fresh, organic, and quality
          products
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-emerald-500 mx-auto rounded-full"></div>

        {/* Product Count */}
        <div className="mt-6 inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-green-700 font-medium">
            {inStockProducts.length} products available
          </span>
        </div>
      </div>
      {/* Filters and Controls */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-700 font-medium mr-2">Categories:</span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm cursor-pointer font-medium transition-all duration-300 ${
                  filterCategory === category
                    ? "bg-primary text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 cursor-pointer py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300"
            >
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
              <option value="discount">Best Discount</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {isLoading ? (
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
        </div>
      ) : inStockProducts.length > 0 ? (
        <>
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {inStockProducts.map((product, index) => (
              <div
                key={product._id}
                className="transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: `fadeInUp 0.6s ease-out ${index * 50}ms both`,
                }}
              >
                <ProductCart product={product} />
              </div>
            ))}
          </div>

          {/* Load More Button (if needed) */}
          {inStockProducts.length > 20 && (
            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-primary to-emerald-500 text-white font-semibold rounded-2xl hover:from-primary-dull hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Load More Products
              </button>
            </div>
          )}
        </>
      ) : (
        // Enhanced Empty State
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            {/* Illustration */}
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
              <span className="text-6xl">🔍</span>
            </div>

            {/* Message */}
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {searchQuery ? "No products found" : "No products available"}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? `We couldn't find any products matching "${searchQuery}". Try adjusting your search or browse our categories.`
                : "There are no products available at the moment. Please check back later."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {searchQuery && (
                <button
                  onClick={() => setFilterCategory("all")}
                  className="px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dull transition-colors duration-300"
                >
                  Clear Filters
                </button>
              )}
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Decoration */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-1 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
          <span className="text-primary text-sm font-medium mx-4">
            Quality Products • Fresh Daily
          </span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-300"></div>
          <div className="w-3 h-1 bg-emerald-400 rounded-full animate-bounce delay-400"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AllProducts;
