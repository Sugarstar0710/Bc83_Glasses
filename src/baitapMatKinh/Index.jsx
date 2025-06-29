import React from "react";
import Menu from "./Menu";
import Model from "./Model";
import Glasses from "./Glasses";
export default function BaiTapMatKinh() {
  return (
    <div style={{backgroundImage:"url(./images/background.jpg)"}}  >
      <Menu />

      <div style={{marginTop:"50px" }}>
        <Model/>
      </div>
      <Glasses/>
    </div>
  );
//
}
