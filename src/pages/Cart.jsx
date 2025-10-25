import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeItem, totalItems, totalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <Link
          to="/"
          className="text-indigo-600 font-medium hover:underline"
        >
          Go back to shop
        </Link>
      </div>
    );
  }









  
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={addToCart}
            onDecrease={decreaseQty}
            onDelete={removeItem}
          />
        ))}

        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <div>
            <p className="text-gray-700">Total Items: <span className="font-semibold">{totalItems}</span></p>
            <p className="text-gray-700">Total Price: <span className="font-semibold">${totalPrice}</span></p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Clear Cart
            </button>

            <Link
              to="/checkout"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
