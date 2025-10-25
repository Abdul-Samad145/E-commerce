import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (filter === "1-50") return product.price >= 1 && product.price <= 50;
    if (filter === "50-100") return product.price > 50 && product.price <= 100;
    if (filter === "100-200") return product.price > 100 && product.price <= 200;
    if (filter === "200+") return product.price > 200;
    return true;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
     
      <div className="w-full mb-10">
        <img
          src="/pic.png"
          alt="Store Banner"
          className="w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
         Product Store
      </h1>

     
      <div className="flex justify-center mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
        >
          <option value="all">All Prices</option>
          <option value="1-50">$1 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200+">$200+</option>
        </select>
      </div>

     
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={addToCart} />
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No products found in this price range.
          </p>
        )}
      </div>
    </div>
  );
}
