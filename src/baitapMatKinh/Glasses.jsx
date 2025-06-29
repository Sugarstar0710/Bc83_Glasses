import React from "react";

export default function Glasses({ onSelect }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "700px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9"].map((v, i) => (
        <img
          key={i}
          src={`./images/${v}.png`}
          alt={`Glasses ${i + 1}`}
          style={{
            width: "70px",
            height: "auto",
            margin: "10px",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => onSelect(`${v}.png`)} 
        />
      ))}
    </div>
    
  );
}
