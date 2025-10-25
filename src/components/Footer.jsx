import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-10 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <h3 className="text-2xl font-bold mb-2">ShopEase</h3>
        <p className="text-gray-200 mb-4 text-sm sm:text-base">
          Bringing you quality products with a seamless shopping experience.
        </p>
        <div className="border-t border-white/20 mt-6">
          <p className="text-sm text-gray-200 py-4">
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
