import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto w-full p-4 md:p-8 lg:p-12 flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
