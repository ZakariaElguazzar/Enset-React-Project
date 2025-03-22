import React, { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./Sidebar";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col ">
      {/* Navbar (Fixed at the top) */}
      <div className="relative z-50">
      <Navbar className="relative" setIsOpen={setIsOpen} />
      </div>

      {/* Main Content: Sidebar + Page Content */}
      <div className="flex flex-1">
        {/* Sidebar (Toggles visibility) */}
        <Sidebar isOpen={isOpen} />

        {/* Main Page Content (Takes remaining space) */}
        <div className="flex-grow p-4 bg-gray-100">
          <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
