import React from "react";
import "./Product.css";

const Product = ({ id, title, price, rating, image }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <span role="img" aria-label="Star" key={index}>
                ⭐️
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
};

export default Product;
