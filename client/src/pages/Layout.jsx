import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { Loader } from "lucide-react";
import Login from "../pages/Login";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return (

      <div className="flex h-screen w-full items-center justify-center bg-white">
<Loader 
  className="animate-spin text-green-600" 
  style={{ animationDuration: '3s' }} 
  size={48} 
/>
      </div>
    );
  }

  return (
    <div>
      {user ? (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          {/* Dashboard/Resume content yahan dikhega */}
          <main className="container mx-auto p-4">
            <Outlet />
          </main>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;