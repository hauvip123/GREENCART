import React from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { LayoutDashboard, ShoppingBag, Package, FileText } from "lucide-react";

const Sidebar = ({ isSidebarCollapsed }) => {
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/seller",
      icon: LayoutDashboard,
    },
    {
      name: "Add Product",
      path: "/seller/add-product",
      icon: FileText,
    },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: Package,
    },
    {
      name: "Orders",
      path: "/seller/orders",
      icon: ShoppingBag,
    },
  ];

  return (
    <div
      className={`
        flex flex-col
        ${isSidebarCollapsed ? "w-25" : "w-60"}
        h-screen
        bg-white border-r border-gray-200 
        transition-all duration-300 ease-in-out
        shadow-sm
      `}
    >
      {/* Header */}
      <div className="py-5 border-b flex items-center justify-center border-gray-200 shadow-sm">
        {!isSidebarCollapsed ? (
          <Link to="/">
            <img
              className="cursor-pointer hover:opacity-90 transition-opacity"
              src={assets.logo}
              alt="Logo"
            />
          </Link>
        ) : (
          <h1 className="text-xl font-bold text-slate-800">Admin</h1>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-6 px-3">
        <div className="space-y-1">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `group flex items-center px-3 py-3 mx-2 rounded-xl font-medium text-sm
                transition-all duration-200 relative overflow-hidden
                ${isSidebarCollapsed ? "justify-center" : ""}
                ${
                  isActive
                    ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-400/30"
                    : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                }`
              }
            >
              <item.icon
                className={`
                  w-6 h-6 transition-transform group-hover:scale-110 
                  ${isSidebarCollapsed ? "" : "mr-3"}
                `}
              />

              {!isSidebarCollapsed && (
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate text-[16px]">
                    {item.name}
                  </p>
                </div>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Sidebar Footer */}
      {!isSidebarCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-green-900 shadow-md">
            <img
              src="https://scontent.fhan4-2.fna.fbcdn.net/v/t39.30808-6/518392588_716178094667372_5332651355185549624_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEQFsijI2OL68lfgN6TxT-qLYwMB6aylB8tjAwHprKUHxDPpJ3VQAYdAdHRrhLxGv2_d7G2Fv7EGoQ_UTrF4nv5&_nc_ohc=VWOgjRIKJ74Q7kNvwF5sjXm&_nc_oc=AdlwTIUVSzAQ7HIfeoHcWXcYeXfkTgNm1tk0RzIjLVjJqjE7OfKGIJMajzqnJxQfUVH3x4npDEV9PAckOBfQgHxT&_nc_zt=23&_nc_ht=scontent.fhan4-2.fna&_nc_gid=wX5KFaiCuNpSItGoVPxzsg&oh=00_AfWjr4CndbQvrpBNkPz8xdNBG-Ux22aTx6LgFz7oJGq94Q&oe=689FFFFB"
              alt="User Avatar"
              className="h-10 w-10 rounded-full ring-2 ring-white object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                Em Trang
              </p>
              <p className="text-xs text-slate-300 truncate">Administrator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
