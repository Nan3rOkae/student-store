import * as React from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import "./Sidebar.css";

export default function Sidebar({
  isOpen,
  shoppingCart,
  products,
  subtotal,
  handleOnToggle,
}) {
  return (
    <section className="sidebar">
      <section className={isOpen ? "sidenav open" : "sidenav closed"}>
        <div className="allitems">
          <button
            className={isOpen ? "toggle-button open" : "toggle-button closed"}
            onClick={handleOnToggle}
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <button className={isOpen ? "closedIcon open" : "closedIcon closed"}>
            <i className="material-icons md-48" onClick={handleOnToggle}>
              add_shopping_cart
            </i>
          </button>
        </div>
        <ShoppingCart
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
          subtotal={subtotal}
        />
      </section>
    </section>
  );
}
