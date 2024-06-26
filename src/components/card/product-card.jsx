import React from "react";

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
      <div className="product-content">
        <div className="title">{title}</div>
        <div className="janr">{janr}</div>
        <div className="svgs">
          <img src={starImg} alt="star" className="star" />
          <div className="svgss">
            <img src={headphone} alt="headphone" className="headphone" />
            <img src={book} alt="book" className="book" />
          </div>
        </div>
      </div>
    </div>
  );
};
