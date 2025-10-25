import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "" });

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    clearCart();
    navigate("/");
  };

  const getQty = (item) => {
    return Number(item.qty ?? item.quantity) || 0;
  };

  const getPrice = (item) => {
    return Number(item.price) || 0;
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">No items to checkout </h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Checkout</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input name="address" value={form.address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">City</label>
            <input name="city" value={form.city} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div className="w-32">
            <label className="block text-sm font-medium mb-1">ZIP</label>
            <input name="zip" value={form.zip} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <button type="submit" className="mt-6 w-full py-2 bg-indigo-600 text-white rounded-lg">Place Order</button>
      </form>

      <aside className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

        <ul className="divide-y">
          {cart.map((item) => {
            const qty = getQty(item);
            const price = getPrice(item);
            const lineTotal = price * qty;
            return (
              <li key={item.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    <p className="text-xs text-gray-500">{qty} × ${price.toFixed(2)}</p>
                  </div>
                </div>

                <span className="font-semibold">${lineTotal.toFixed(2)}</span>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 border-t pt-3 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${(Number(totalPrice) || cart.reduce((s, i) => s + (Number(i.price)||0) * (Number(i.qty ?? i.quantity)||0), 0)).toFixed(2)}</span>
        </div>
      </aside>
    </div>
  );
}
