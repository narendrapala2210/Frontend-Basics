import React from "react";

import NavBar from "../../Components/NavBar";
import CartListContent from "../../Context/cartContext";

import "./index.css";

const Cart = () => (
  <CartListContent.Consumer>
    {(value) => {
      const { cartList, deleteItem } = value;
      let sumOfVal = 0;
      let amount = 0;
      if (cartList.length > 0) {
        amount = cartList.map((eachItem) => eachItem.price * eachItem.quantity);
        sumOfVal = amount.reduce((a, b) => a + b);
      }

      return (
        <>
          <NavBar />
          <div className="cart">
            <h4>Shopping Cart</h4>
            {cartList.length === 0 && <p>No cart Items</p>}
            <div className="cart-container">
              {cartList.length > 0 &&
                cartList.map((eachItem) => {
                  const { imageURL, id, name, quantity, price } = eachItem;
                  const deleteItems = () => {
                    deleteItem(id);
                  };

                  return (
                    <div key={eachItem.id} className="cart-item">
                      <img src={imageURL} alt="" className="item-img" />
                      <div className="item-name-container">
                        <span className="item-name">{name}</span>
                        <br />
                        <span className="item-name">RS {price}</span>
                      </div>
                      <button className="item-button ml-auto" type="button">
                        {quantity}
                      </button>
                      <button
                        onClick={deleteItems}
                        className="item-button"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  );
                })}
            </div>

            <hr />
            <div className="total-price-container">
              <span>Total Amount :{sumOfVal}</span>
            </div>
          </div>
        </>
      );
    }}
  </CartListContent.Consumer>
);

export default Cart;
