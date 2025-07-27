import { useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const ProductCart = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Calculate discount percentage
  const discountPercent = Math.round(
    ((product.price - product.offerPrice) / product.price) * 100
  );

  return (
    product && (
      <div
        onClick={() =>
          navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
        }
        className="group relative border border-gray-200/50 rounded-2xl md:px-5 px-4 py-4 bg-white min-w-56 max-w-56 w-full cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30 overflow-hidden"
        style={{
          boxShadow: "0 4px 20px rgba(79, 191, 139, 0.05)",
        }}
      >
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-emerald-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Discount Badge */}
        {discountPercent > 0 && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10 animate-pulse">
            -{discountPercent}%
          </div>
        )}

        {/* Fresh Badge */}
        <div className="absolute top-3 right-3 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300 z-10"></div>

        {/* Product Image Container */}
        <div className="relative flex items-center justify-center px-2 py-4 mb-3">
          {/* Image Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-100/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Loading Shimmer */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-xl"></div>
          )}

          <img
            className={`relative z-10 group-hover:scale-110 transition-all duration-500 max-w-26 md:max-w-36 filter group-hover:drop-shadow-xl ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src={product.image[0]}
            alt={product.name}
            onLoad={() => setIsImageLoaded(true)}
          />

          {/* Floating Elements */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-primary/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-500 delay-100"></div>
          <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-emerald-400/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700 delay-200"></div>
        </div>

        {/* Product Info */}
        <div className="relative z-10 text-gray-500/60 text-sm space-y-2">
          {/* Category */}
          <p className="text-primary/70 font-medium text-xs uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
            {product.category}
          </p>

          {/* Product Name */}
          <p className="text-gray-700 font-semibold text-lg truncate w-full group-hover:text-gray-900 transition-colors duration-300 leading-tight">
            {product.name}
          </p>

          {/* Rating Section */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                    className="md:w-3.5 w-3 group-hover:scale-110 transition-transform duration-300"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  />
                ))}
            </div>
            <p className="text-gray-600 text-sm font-medium group-hover:text-primary transition-colors duration-300">
              (4.0)
            </p>
          </div>

          {/* Price and Cart Section */}
          <div className="flex items-end justify-between mt-4 pt-3 border-t border-gray-100 group-hover:border-primary/20 transition-colors duration-300">
            {/* Price */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <p className="md:text-xl text-lg font-bold text-primary group-hover:scale-105 transition-transform duration-300">
                  {currency}${product.offerPrice}
                </p>
                {product.price !== product.offerPrice && (
                  <span className="text-gray-400 md:text-sm text-xs line-through font-medium">
                    {currency}${product.price}
                  </span>
                )}
              </div>
              {discountPercent > 0 && (
                <p className="text-green-600 text-xs font-medium">
                  Save {currency}$
                  {(product.price - product.offerPrice).toFixed(2)}
                </p>
              )}
            </div>

            {/* Cart Controls */}
            <div className="text-primary" onClick={(e) => e.stopPropagation()}>
              {!cartItems[product._id] ? (
                <button
                  className="flex items-center justify-center cursor-pointer gap-1.5 bg-gradient-to-r from-primary/10 to-emerald-50 hover:from-primary/20 hover:to-emerald-100 border border-primary/40 hover:border-primary/60 md:w-[85px] w-[70px] h-[36px] rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg group/btn"
                  onClick={() => {
                    addToCart(product._id);
                  }}
                >
                  <img
                    src={assets.cart_icon}
                    alt="cart_icon"
                    className="group-hover/btn:scale-110 transition-transform duration-200"
                  />
                  <span className="group-hover/btn:text-primary-dull transition-colors duration-200">
                    Add
                  </span>
                </button>
              ) : (
                <div className="flex items-center justify-center gap-1 md:w-[85px] w-[70px] h-[36px] bg-gradient-to-r from-primary/20 to-emerald-100 border border-primary/50 rounded-xl select-none shadow-inner">
                  <button
                    onClick={() => {
                      removeFromCart(product._id);
                    }}
                    className="cursor-pointer text-lg font-bold px-2 h-full text-primary hover:text-primary-dull hover:scale-125 transition-all duration-200 flex items-center justify-center rounded-l-xl hover:bg-primary/10"
                  >
                    −
                  </button>

                  <div className="w-8 text-center">
                    <span className="text-primary font-bold text-sm bg-white/50 px-1 py-0.5 rounded text-center min-w-[20px] inline-block">
                      {cartItems[product._id]}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      addToCart(product._id);
                    }}
                    className="cursor-pointer text-lg font-bold px-2 h-full text-primary hover:text-primary-dull hover:scale-125 transition-all duration-200 flex items-center justify-center rounded-r-xl hover:bg-primary/10"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hover Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl pointer-events-none"></div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-emerald-400/30 to-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>

        {/* Corner Decorations */}
        <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-primary/20 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
      </div>
    )
  );
};

export default ProductCart;
