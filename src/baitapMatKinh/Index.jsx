import React, { useState } from "react";
import Menu from "./Menu";
import Model from "./Model";
import Glasses from "./Glasses";

export default function BaiTapMatKinh() {
  const [selectedGlass, setSelectedGlass] = useState(null);

  const handleSelectGlass = (glass) => {
    setSelectedGlass(glass);
  };

  return (
    <div style={{ backgroundImage: "url(./images/background.jpg)", minHeight: "100vh" }}>
      <Menu />
      <div style={{ marginTop: "50px" }}>
        <Model selectedGlass={selectedGlass} />
      </div>
      <Glasses onSelect={handleSelectGlass} />
    </div>
  );
}
