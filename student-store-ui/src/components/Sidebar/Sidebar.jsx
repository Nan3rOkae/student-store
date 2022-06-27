import * as React from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

import "./Sidebar.css";

export default function Sidebar(props) {
  return (
    <section className="sidebar">
      <section className={props.isOpen ? "sidenav open" : "sidenav closed"}>
        <div className="allitems">
          <button
            className={
              props.isOpen ? "toggle-button open" : "toggle-button closed"
            }
            onClick={props.handleOnToggle}
          >
            <i className="material-icons md-48">arrow_forward</i>
          </button>
          <button
            className={props.isOpen ? "closedIcon open" : "closedIcon closed"}
          >
            <i className="material-icons md-48" onClick={props.handleOnToggle}>
              add_shopping_cart
            </i>
          </button>
        </div>

        <CheckoutForm
          handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
          handleOnCheckoutFormChange={props.handleOnCheckoutFormChange}
          isOpen={props.isOpen}
          shoppingCart={props.shoppingCart}
          checkoutForm={props.checkoutForm}
        />
      </section>
    </section>
  );
}
