import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Services/Auth";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

function Navbar({ setIsOpen }) {
  const { user, logout } = useAuth();

  return (
    <nav className=" bg-white shadow-md p-4 flex justify-between items-center">
      {/* Left Side: Logo & Sidebar Toggle */}
      <div className="flex items-center">
        <button
          className="text-gray-700 text-2xl mr-4"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FiMenu />
        </button>
        <Link to="/">
          <img src="src/assets/enset-seeklogo.png" alt="EnsetLogo" className="h-10" />
        </Link>
      </div>

      {/* Right Side: User Info & Logout */}
      <div className="flex items-center">
        {user ? (
          <>
            <span className="mr-4 text-gray-800">{user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-blue-500">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
