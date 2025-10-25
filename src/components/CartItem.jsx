import React from "react";

export default function CartItem({ item, onIncrease, onDecrease, onDelete }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-200 rounded-2xl p-4 bg-white shadow-sm sm:shadow-md">
      <div className="flex items-center gap-4 w-full sm:w-2/3">
        <div className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="h-20 w-20 sm:h-24 sm:w-24 object-contain rounded-md bg-gray-50"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h4 className="font-semibold text-gray-800 text-sm sm:text-base leading-tight line-clamp-2">
            {item.title}
          </h4>
          <p className="text-indigo-600 font-semibold mt-1">${item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-1/3">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
          <button
            onClick={() => onDecrease(item)}
            className="px-3 py-1 text-gray-700 hover:bg-gray-100"
          >
            −
          </button>
          <span className="px-3 font-medium text-gray-800 select-none">
            {item.qty}
          </span>
          <button
            onClick={() => onIncrease(item)}
            className="px-3 py-1 text-gray-700 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <button
          onClick={() => onDelete(item)}
          className="text-red-500 hover:text-red-700 text-2xl leading-none font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
}
