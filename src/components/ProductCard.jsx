import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 p-4 flex flex-col justify-between">
      <div className="h-48 flex items-center justify-center mb-3">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-sm font-semibold mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-indigo-600 font-bold">${product.price.toFixed(2)}</p>
      </div>

      <button
        onClick={() => onAdd(product)} 
        className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
