import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 tracking-tight hover:text-indigo-800 transition"
        >
          <img src="./logo.png" alt="Logo" className="h-8 w-8" />  ShopEase
        </Link>

        <nav className="flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-indigo-600 transition">
            Home
          </Link>
          <Link to="/cart" className="hover:text-indigo-600 transition relative">
            Cart
            {totalItems > 0 && (
              <span className="ml-1 bg-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/checkout" className="hover:text-indigo-600 transition">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
}
