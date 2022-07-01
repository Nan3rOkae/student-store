import * as React from "react";
import "./ShoppingCart.css";
import { useState } from "react";

export default function ShoppingCart({
  isOpen,
  shoppingCart,
  products,
  subtotal,
}) {
  var subprice = Math.round(subtotal * 100) / 100;

  var taxes = subprice * 0.0875;
  var total = subprice + taxes;

  total = Math.round(total * 100) / 100;

  taxes = Math.round(taxes * 100) / 100;

  var length;
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
        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            {shoppingCart
              ? shoppingCart.map((item, index) => (
                  <div className="product-row" key={index}>
                    <span className="flex-2 cart-product-name">
                      {products.find((elem) => elem.id === item.itemId).name}
                    </span>
                    <span className="center cart-product-quantity">
                      {item.quantity}
                    </span>
                    <span className="center cart-product-price">
                      {"$" +
                        products.find((elem) => elem.id === item.itemId).price}
                    </span>
                    <span className="center cart-product-subtotal">
                      {"$" +
                        item.quantity *
                          products.find((elem) => elem.id === item.itemId)
                            .price}
                    </span>
                  </div>
                ))
              : null}
          </div>
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>
              <span className="center subtotal">{"$" + subprice}</span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span className="center">{"$" + taxes}</span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span className="center total-price">{"$" + total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
