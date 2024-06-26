import React from "react";
import "./ruknlar.scss";

export const RuknlarCard = ({ cardImg, h1 }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={cardImg} alt={`${h1} image`} />
        <h1>{h1}</h1>
      </div>
    </div>
  );
};
