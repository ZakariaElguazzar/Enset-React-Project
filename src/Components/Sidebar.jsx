import React from "react";
import { FiX, FiHome, FiShoppingCart, FiUpload } from "react-icons/fi"; // Icons

function Sidebar({ isOpen }) {
  return (
    <aside
      className={`left-0 top-0 h-full w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full fixed "
      } transition-transform duration-300`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold">Menu</h1>
      </div>
      <ul className="p-4">
        <li className="p-2 flex items-center hover:bg-gray-200 cursor-pointer">
          <FiHome className="mr-2" /> Dashboard
        </li>
        <li className="p-2 flex items-center hover:bg-gray-200 cursor-pointer">
          <FiShoppingCart className="mr-2" /> Products
        </li>
        <li className="p-2 flex items-center hover:bg-gray-200 cursor-pointer">
          <FiUpload className="mr-2" /> Upload File
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
