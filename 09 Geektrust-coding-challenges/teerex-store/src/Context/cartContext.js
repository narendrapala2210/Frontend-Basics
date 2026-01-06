import React from "react";

const CartListContent = React.createContext({
  cartList: [],
  addToCart: () => {},
  deleteItem: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
});

export default CartListContent;
