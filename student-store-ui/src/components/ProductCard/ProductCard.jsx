import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="product-card">
      <div className="media">
        <Link to={"/products/" + props.product.id}>
          <img src={props.product.image} />
        </Link>
      </div>
      <div className="product-info">
        <div className="main-info">
          <p className="product-name">{props.product.name}</p>
          <p className="product-price"> {"$" + props.product.price}</p>
        </div>
        <div className="actions">
          {props.showDescription ? (
            <p className="product-description">{props.product.description}</p>
          ) : null}
          <div className="buttons">
            <button
              className="add"
              onClick={() => props.handleAddItemToCart(props.product.id)}
            >
              {" "}
              <i className="material-icons">add</i>
            </button>
            <button
              className="remove"
              onClick={() => props.handleRemoveItemFromCart(props.product.id)}
            >
              {" "}
              <i className="material-icons">remove</i>
            </button>
          </div>

          {props.quantity ? (
            <span className="product-quantity">{props.quantity}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
