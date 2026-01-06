import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import CartListContent from "../../Context/cartContext";

import "./index.css";

const NavBar = () => (
  <CartListContent.Consumer>
    {(value) => {
      const { cartList } = value;
      const cartCount = cartList.length;
      return (
        <nav className="nav-bar">
          <span className="nav-title">
            <Link className="nav-link" to="/">
              TeeRex Store
            </Link>
          </span>
          <ul className="nav-ul-container">
            <li className="nav-li-item product-nav">
              <Link className="nav-link" to="/">
                Products
              </Link>
            </li>
            <li className="nav-li-item">
              <Link className="nav-link" to="/cart">
                <AiOutlineShoppingCart className="nav-icon" />
                {cartCount !== 0 && (
                  <sup className="no-of-items">{cartCount}</sup>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      );
    }}
  </CartListContent.Consumer>
);
export default NavBar;
