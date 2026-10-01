"use client";

import { useState } from "react";

export default function TestPage() {
  const [count, setCount] = useState(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050816",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1>Mobile React Test</h1>

      <p>Count: {count}</p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        CLICK ME
      </button>
    </main>
  );
}