import React from "react";

export const RuknlarCard = ({ cardImg, headline }) => {
  return (
    <div className="product-card">
      <img src={cardImg} alt={`${headline} image`} />
      <h1>{headline}</h1>
    </div>
  );
};
