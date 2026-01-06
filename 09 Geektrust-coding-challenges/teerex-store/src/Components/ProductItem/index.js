import React from "react";
import { ImgContainer } from "./styledComponent";

import CartContext from "../../Context/cartContext";

import "./index.css";

const ProductItem = ({ data }) => (
  <CartContext.Consumer>
    {(cart) => {
      const { addToCart } = cart;
      const { imageURL, name, price } = data;
      const addingCart = () => {
        addToCart(data);
      };
      return (
        <div className="product-item-container">
          <ImgContainer url={imageURL}>
            <span className="name">{name}</span>
          </ImgContainer>

          <div className="info-container">
            <span className="price">RS {price}</span>
            <button onClick={addingCart} className="add-to-cart" type="button">
              Add to cart
            </button>
          </div>
        </div>
      );
    }}
  </CartContext.Consumer>
);

export default ProductItem;
