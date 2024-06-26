import React from "react";
import "./service-card.scss";

export const ServiceCard = ({ cardImg, h1 }) => {
  return (
    <div className="service-card flex items-center">
      {cardImg}
      <div className="card-title">
        <h1>{h1}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </p>
      </div>
    </div>
  );
};
