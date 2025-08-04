import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mt-20 p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p>This is a dummy paragraph to demonstrate theme styles.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded transition duration-300 hover:scale-105">
        Click Me
      </button>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {products.map((item) => (
          <div key={item.id} className="p-4 border rounded shadow">
            <h2 className="font-semibold">{item.title.slice(0, 20)}...</h2>
            <img src={item.image} alt={item.title} className="w-full h-40 object-contain" />
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
