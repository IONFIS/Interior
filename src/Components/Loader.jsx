import React from "react";
import "./cubeLoader.css";

export default function CubeLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="thecube">
        <div className="cube c1"></div>
        <div className="cube c2"></div>
        <div className="cube c3"></div>
        <div className="cube c4"></div>
      </div>
    </div>
  );
}
