import React from "react";

export default function Glasses() {
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
  {["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"].map((g, i) => (
    <img
      key={i}
      src={`./images/${g}.jpg`}
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
    />
  ))}
</div>
  );
}
