import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

import CartContext from "./Context/cartContext";

class App extends Component {
  state = { cartList: [], noOfItems: 0 };

  addToCart = (data) => {
    const { cartList, noOfItems } = this.state;
    if (cartList.length === 0) {
      this.setState({
        cartList: [{ ...data, no_of_items: 1 }],
        noOfItems: noOfItems + 1,
      });
    } else {
      this.setState((prev) => ({
        cartList: [...prev.cartList, { ...data, no_of_items: 1 }],
        noOfItems: prev.noOfItems + 1,
      }));
    }
  };
  deleteItem = (id) => {
    const { cartList } = this.state;
    this.setState({ cartList: cartList.filter((item) => item.id !== id) });
  };
  increaseItem = (id) => {
    this.setState((prevState) => ({
      cartList: [
        prevState.cartList.map((eachProduct) => {
          if (eachProduct.id === id) {
            if (eachProduct.no_of_items >= 1) {
              return {
                ...eachProduct,
                no_of_items: eachProduct.no_of_items + 1,
              };
            }
          }
          return eachProduct;
        }),
      ],
    }));
  };
  decreaseItem = (id) => {
    this.setState((prevState) => ({
      cartList: [
        prevState.cartList.map((eachProduct) => {
          if (eachProduct.id === id) {
            if (eachProduct.no_of_items >= 1) {
              return {
                ...eachProduct,
                no_of_items: eachProduct.no_of_items - 1,
              };
            }
          }
          return eachProduct;
        }),
      ],
    }));
  };

  render() {
    const { cartList, noOfItems } = this.state;
    console.log("final ", cartList);
    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            noOfItems: noOfItems,
            addToCart: this.addToCart,
            deleteItem: this.deleteItem,
            increaseItem: this.increaseItem,
            decreaseItem: this.decreaseItem,
          }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Redirect to="/" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;

//  this.setState((prevState) => ({
//    cartList: prevState.cartList.map((eachCart) => {
//      if (data.id === eachCart.id) {
//        return { ...eachCart, quantity: eachCart.quantity + 1 };
//      }
//      return data;
//    }),
//  }));
