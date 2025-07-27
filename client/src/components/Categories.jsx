import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  // Function to get complementary colors based on bgColor
  const getColorScheme = (bgColor) => {
    const colorMap = {
      "#FEF6DA": {
        // Organic veggies - Yellow/Orange theme
        primary: "#F59E0B", // amber-500
        secondary: "#FCD34D", // amber-300
        accent: "#FBBF24", // amber-400
        glow: "rgb(245, 158, 11, 0.2)",
      },
      "#FEE0E0": {
        // Fresh Fruits - Pink/Red theme
        primary: "#EC4899", // pink-500
        secondary: "#F9A8D4", // pink-300
        accent: "#F472B6", // pink-400
        glow: "rgb(236, 72, 153, 0.2)",
      },
      "#F0F5DE": {
        // Cold Drinks - Green theme
        primary: "#10B981", // emerald-500
        secondary: "#6EE7B7", // emerald-300
        accent: "#34D399", // emerald-400
        glow: "rgb(16, 185, 129, 0.2)",
      },
      "#E1F5EC": {
        // Instant Food - Mint theme
        primary: "#06B6D4", // cyan-500
        secondary: "#67E8F9", // cyan-300
        accent: "#22D3EE", // cyan-400
        glow: "rgb(6, 182, 212, 0.2)",
      },
      "#FEE6CD": {
        // Dairy Products - Orange theme
        primary: "#EA580C", // orange-600
        secondary: "#FDBA74", // orange-300
        accent: "#FB923C", // orange-400
        glow: "rgb(234, 88, 12, 0.2)",
      },
      "#E0F6FE": {
        // Bakery - Blue theme
        primary: "#0EA5E9", // sky-500
        secondary: "#7DD3FC", // sky-300
        accent: "#38BDF8", // sky-400
        glow: "rgb(14, 165, 233, 0.2)",
      },
      "#F1E3F9": {
        // Grains - Purple theme
        primary: "#A855F7", // purple-500
        secondary: "#C4B5FD", // purple-300
        accent: "#A78BFA", // purple-400
        glow: "rgb(168, 85, 247, 0.2)",
      },
    };
    return colorMap[bgColor] || colorMap["#E1F5EC"]; // Default to mint if not found
  };

  return (
    <div className="mt-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-4">
          Fresh Categories
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Discover fresh, organic, and quality products for your daily needs
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 md:gap-6">
        {categories.map((category, index) => {
          const colors = getColorScheme(category.bgColor);

          return (
            <div
              key={index}
              className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-3"
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              {/* Card Container */}
              <div
                className="relative overflow-hidden rounded-3xl p-6 flex flex-col items-center justify-center min-h-[140px] md:min-h-[160px] shadow-md hover:shadow-xl transition-all duration-500 border border-white/50"
                style={{
                  backgroundColor: category.bgColor,
                  boxShadow: `0 4px 20px ${colors.glow}`,
                }}
              >
                {/* Dynamic Pattern Background */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute top-3 right-4 w-6 h-6 rounded-full group-hover:scale-150 group-hover:rotate-180 transition-all duration-700"
                    style={{ backgroundColor: `${colors.secondary}50` }}
                  ></div>
                  <div
                    className="absolute bottom-4 left-3 w-4 h-4 rounded-full group-hover:scale-125 group-hover:-rotate-90 transition-all duration-600 delay-100"
                    style={{ backgroundColor: `${colors.accent}60` }}
                  ></div>
                  <div
                    className="absolute top-1/3 left-1/3 w-3 h-3 rounded-full group-hover:scale-200 group-hover:rotate-45 transition-all duration-800 delay-200"
                    style={{ backgroundColor: `${colors.primary}40` }}
                  ></div>

                  {/* Dynamic shapes */}
                  <div
                    className="absolute top-2 left-2 w-5 h-3 rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-500"
                    style={{ backgroundColor: `${colors.secondary}30` }}
                  ></div>
                  <div
                    className="absolute bottom-2 right-3 w-4 h-2 rounded-full transform -rotate-30 group-hover:rotate-30 transition-transform duration-600 delay-150"
                    style={{ backgroundColor: `${colors.accent}40` }}
                  ></div>
                </div>

                {/* Dynamic Glow Effect on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}08, transparent, ${colors.accent}08)`,
                  }}
                ></div>

                {/* Dynamic Color Accent Border */}
                <div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-opacity-40 transition-colors duration-400"
                  style={{
                    borderColor: `${colors.primary}00`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${colors.primary}4D`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "transparent";
                  }}
                ></div>

                {/* Image Container */}
                <div className="relative z-10 mb-4 group-hover:scale-110 transition-transform duration-500">
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.text}
                      className="max-w-16 md:max-w-20 lg:max-w-24 h-auto object-contain filter drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    {/* Dynamic Product Glow */}
                    <div
                      className="absolute inset-0 rounded-full blur-lg scale-90 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}30, ${colors.accent}30)`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Category Text with Dynamic Color */}
                <p
                  className="relative z-10 text-sm md:text-base font-semibold text-gray-800 text-center leading-tight transition-colors duration-300"
                  style={{
                    "--hover-color": colors.primary,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = colors.primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1f2937"; // text-gray-800
                  }}
                >
                  {category.text}
                </p>

                {/* Dynamic Fresh Indicator */}
                <div
                  className="absolute top-3 left-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"
                  style={{ backgroundColor: colors.primary }}
                ></div>

                {/* Dynamic Shimmer Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, ${colors.secondary}40, transparent)`,
                  }}
                ></div>
              </div>

              {/* Dynamic Floating Elements */}
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
                }}
              ></div>
              <div
                className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 delay-100"
                style={{
                  background: `linear-gradient(45deg, ${colors.accent}, ${colors.secondary})`,
                }}
              ></div>

              {/* Dynamic decoration */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-4 h-2 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-opacity duration-400 delay-200"
                style={{ backgroundColor: `${colors.primary}99` }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Bottom Dynamic Decoration */}
      <div className="mt-16 flex justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-1 bg-pink-400 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-200"></div>
          <span className="text-green-600 text-sm font-medium mx-4">
            Fresh & Delicious
          </span>
          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-300"></div>
          <div className="w-3 h-1 bg-orange-400 rounded-full animate-bounce delay-400"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-500"></div>
        </div>
      </div>

      {/* CSS Custom Properties Integration */}
      <style jsx>{`
        .primary-accent {
          background: var(--color-primary);
        }
        .primary-accent-dull {
          background: var(--color-primary-dull);
        }
      `}</style>
    </div>
  );
};

export default Categories;
