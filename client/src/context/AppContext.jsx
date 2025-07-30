import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const currency = import.meta.VITE_CURRENCY;
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState({});

  //Fetch Sellect status
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      if (data.success) {
        setIsSeller(true);
      } else {
        setIsSeller(false);
      }
    } catch (error) {
      setIsSeller(false);
    }
  };
  // Fetch all products
  const featchProducts = async () => {
    setProducts(dummyProducts);
  };
  // Add products to carts
  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Add to Carst");
  };

  //Update cart item quantity
  const updateCartItem = (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    toast.success("Cart update");
    setCartItems(cartData);
  };
  //Remove product from Cart
  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
    }
    toast.success("Remove from cart");
    setCartItems(cartData);
  };
  // Get Card Item Count
  const getCartCount = () => {
    let totalCount = 0;
    for (const item in cartItems) {
      totalCount += cartItems[item];
    }
    return totalCount;
  };
  //
  const getCardAmount = () => {
    let totailMount = 0;
    for (let item in cartItems) {
      let itemInfor = products.find((product) => product._id === item);
      if (cartItems[item] > 0)
        totailMount += itemInfor.offerPrice * cartItems[item];
    }
    return totailMount;
  };
  useEffect(() => {
    featchProducts();
    fetchSeller();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartCount,
    getCardAmount,
    axios,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
