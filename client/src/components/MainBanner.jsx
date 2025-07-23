import React, { useState, useEffect } from "react";
import Cooking from "../assets/cooking.png";
import CookingBig from "../assets/CookingBig.png";
const MainBanner = () => {
  const [mounted, setMounted] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  // Demo assets - replace with your actual assets
  const assets = {
    main_banner_bg: CookingBig,
    main_banner_bg_sm: Cooking,
  };

  const textVariations = [
    "Freshness You Can Trust, Savings You Will Love!",
    "Quality Products, Amazing Prices!",
    "Fresh Daily, Loved Always!",
  ];

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % textVariations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <div
          className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-emerald-200/40 to-teal-300/40 rounded-full transition-all duration-2000 ${
            mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        ></div>

        {/* Medium Squares */}
        <div
          className={`absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-200/60 to-amber-300/60 rounded-lg rotate-12 transition-all duration-1500 ${
            mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        ></div>

        <div
          className={`absolute bottom-32 right-20 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-pink-300/50 rounded-2xl -rotate-6 transition-all duration-1800 ${
            mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        ></div>

        {/* Small Dots */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 bg-gradient-to-br from-blue-300/70 to-indigo-400/70 rounded-full transition-all duration-1000 ${
              mounted ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              animationDelay: `${0.3 + i * 0.1}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center min-h-screen px-6 md:px-12 lg:px-20">
        {/* Left Content */}
        <div className="space-y-8 order-2 md:order-1">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium border border-emerald-200 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
            Fresh & Quality Guaranteed
          </div>

          {/* Main Heading with Text Rotation */}
          <div className="overflow-hidden">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight transition-all duration-1000 ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {textVariations[textIndex].split(" ").map((word, index) => (
                  <span
                    key={`${textIndex}-${index}`}
                    className="inline-block mr-3 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>
          </div>

          {/* Description */}
          <p
            className={`text-lg text-gray-600 max-w-md leading-relaxed transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          >
            Discover premium quality products with unbeatable prices. Your
            satisfaction is our commitment.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "1.2s" }}
          >
            <button
              onClick={() => (window.location.href = "/products")}
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Shop Now
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => (window.location.href = "/products")}
              className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                View Deals
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex gap-8 pt-4 transition-all duration-1000 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ animationDelay: "1.4s" }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">10K+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-500">Product Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">99%</div>
              <div className="text-sm text-gray-500">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative order-1 md:order-2">
          <div
            className={`relative transition-all duration-1500 ${
              mounted
                ? "scale-100 opacity-100 rotate-0"
                : "scale-90 opacity-0 rotate-3"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={assets.main_banner_bg}
                alt="Fresh Products"
                className="w-full h-96 md:h-[500px] object-cover hidden md:block transform hover:scale-105 transition-transform duration-700"
              />
              <img
                src={assets.main_banner_bg_sm}
                alt="Fresh Products"
                className="w-full h-64 object-cover md:hidden transform hover:scale-105 transition-transform duration-700"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
              <span className="text-2xl">🎯</span>
            </div>

            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500 rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
              <span className="text-white text-2xl font-bold">50%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          className="w-full h-12 fill-current text-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MainBanner;
