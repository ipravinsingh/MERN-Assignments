import React from "react";
import "./Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0;

  cart.forEach((item) => (count += item.quantity));

  return (
    <nav>
      <h4 className="banner">My Mintra</h4>
      <div className="cart-side">
        <div className="cart-items">
          <AiOutlineShoppingCart />
          <h3>{count}</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
