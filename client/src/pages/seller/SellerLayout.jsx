import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/seller/Header";
import Sidebar from "../../components/seller/Sidebar";

const SellerLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="h-screen flex overflow-hidden">
        {/* Header - Fixed */}
        <Sidebar isSidebarCollapsed={isSidebarCollapsed} />
        {/* Sidebar - Fixed */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header
            ontoggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          />
          <main className="flex-1 overflow-y-auto md:p-10 p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SellerLayout;
