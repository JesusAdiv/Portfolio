import React from "react";
import Particle from "../Particle";
import Home2 from "../Home/Home2";

function Trajectory() {
  return (
    <div className="trajectory-page-wrapper">
      <Particle />
      <div style={{ paddingTop: "70px" }}>
        <Home2 />
      </div>
    </div>
  );
}

export default Trajectory;
