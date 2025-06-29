import React from 'react';

export default function Model({ selectedGlass }) {
  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "space-around",
        display: "flex",
        position: "relative",
      }}
    >
      <div className="model1" style={{ position: "relative" }}>
        <img style={{ width: "250px" }} src="./images/model.jpg" alt="model1" />
        {selectedGlass && (
          <img
            src={`./images/${selectedGlass}`}
            alt="glasses"
            style={{
              position: "absolute",
              top: "75px", 
              left: "47%",
              transform: "translateX(-50%)",
              width: "120px",
              opacity: 0.9,
            }}
          />
        )}
      </div>

      <div className="model2">
        <img style={{ width: "250px" }} src="./images/model.jpg" alt="model2" />
      </div>
    </div>
  );
}
