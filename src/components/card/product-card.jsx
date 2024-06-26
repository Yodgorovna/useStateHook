import React from "react";
import "./product.scss";

export const ProductCard = ({
  cardImg,
  title,
  janr,
  starImg,
  headphone,
  book,
}) => {
  return (
    <div className="product-card">
      <img src={cardImg} alt={`${title} image`} />
      <div className="product-content">
        <div className="title">{title}</div>
        <div className="janr">{janr}</div>
        <div className="svgs flex justify-between">
          <img src={starImg} alt="star" className="star" />
          <div className="svgss flex">
            <img src={headphone} alt="headphone" className="headphone" />
            <img src={book} alt="book" className="book" />
          </div>
        </div>
      </div>
    </div>
  );
};
