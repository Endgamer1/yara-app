import React, { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function App() {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("Connecting to Supabase...");

  useEffect(() => {
    async function loadProducts() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setStatus(`Connection error: ${error.message}`);
        return;
      }

      setProducts(data || []);
      setStatus("Connected to Supabase successfully");
    }

    loadProducts();
  }, []);

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        padding: "32px",
        background: "#101827",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Yara App</h1>
      <p>{status}</p>

      <h2>Products</h2>

      {products.length === 0 ? (
        <p>No products found yet.</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: "16px",
              marginBottom: "10px",
              background: "#1f2a3d",
              borderRadius: "10px",
            }}
          >
            <strong>{product.name}</strong>
            <br />
            Price: {product.sale_price}
            <br />
            Stock: {product.stock}
          </div>
        ))
      )}
    </main>
  );
}
