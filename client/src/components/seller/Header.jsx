import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { LogOut, Menu } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Header = ({ ontoggleSidebar }) => {
  const { axios, navigate } = useAppContext();
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/seller/logout");
      if (data.success) {
        toast.success(data.message);
        navigate("/");
      } else {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-200 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={ontoggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-semibold">A</span>
          </div>
          <div className="text-right">
            <p className="text-gray-800 font-medium text-sm">Admin</p>
            <p className="text-gray-500 text-xs">Seller Panel</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
