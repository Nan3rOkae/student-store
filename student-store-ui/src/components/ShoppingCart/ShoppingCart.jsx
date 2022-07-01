import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart({ isOpen, shoppingCart, products }) {
  var length = 0;
  if (length === 0) {
    return (
      <div className="shopping-cart">
        <div className={isOpen ? "open" : "closed"}>
          <h3 className="notif">
            Shopping Cart
            <span className="icon">
              <i className="material-icons md-48">add_shopping_cart</i>
            </span>
          </h3>
          <div className="notification">
            No items added to cart yet. Start shopping now!
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <div className={isOpen ? "open" : "closed"}>
        <h3>
          Shopping Cart
          <span className="icon">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        <div className="header">
          <div className="header-row">
            <span className="flex-2">Name</span>
            <span className="center">Quantity</span>
            <span className="center">Unit Price</span>
            <span className="center">Cost</span>
          </div>
        </div>
      </div>
    </div>
  );
}
