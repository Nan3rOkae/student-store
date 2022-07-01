import * as React from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import Contact from "../Contact/Contact";
import { useState } from "react";

export default function Home(props) {
  const [all, setAll] = useState(null);
  const [clothing, setClothing] = useState(null);
  const [food, setFood] = useState(null);
  const [accessories, setAccessories] = useState(null);
  const [tech, setTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleOnTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const resetButton = () => {
    props.setShoppingCart([]);
  };

  var searchItems = props.products.filter((data) => {
    return data.name.toLowerCase().includes(searchText.toLowerCase());
  });

  if (selectedCategory != "") {
    searchItems = searchItems.filter((data) => {
      return data.category === selectedCategory;
    });
  }

  return (
    <div className="home">
      <Navbar />
      <Sidebar
        handleOnCheckOutFormChange={props.handleOnCheckOutFormChange}
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm}
        handleOnToggle={props.handleOnToggle}
        checkoutForm={props.checkoutForm}
        isOpen={props.isOpen}
        shoppingCart={props.shoppingCart}
        products={props.products}
        subtotal={props.subtotal}
      />
      <Hero />
      <nav className="sub-navbar">
        <div className="content">
          <div className="row">
            <div className="search-bar">
              <input
                type="text"
                name="search"
                placeholder="Search"
                onChange={handleOnTextChange}
              />
              <i className="material-icons">search</i>
            </div>
            <div className="links">
              <span className="help">
                <i className="material-icons">help</i>
                Help
              </span>
              <div className="cart" onClick={resetButton}>
                Reset Cart
              </div>
            </div>
          </div>

          <div className="row">
            <div className="menu"></div>
            <ul
              className={open ? "category-menu open" : "category-menu closed"}
            >
              <button>All Categories</button>
              <button>Clothing</button>
              <button>Food</button>
              <button>Accessories</button>
              <button>Tech</button>
            </ul>
          </div>
        </div>
      </nav>

      <a id="BuyNow"></a>

      <ProductGrid
        products={searchItems}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}
        shoppingCart={props.shoppingCart}
      />

      <Contact />
      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="link-column">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
                  <li>Clothing</li>
                  <li>Food</li>
                  <li>Accessories</li>
                  <li>Tech</li>
                </ul>
              </div>
              <div className="link-column">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Careers</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Account Setting</li>
                  <li>My Orders</li>
                </ul>
              </div>

              <div className="link-column">
                <h4>Our App</h4>
                <ul>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg"
                      alt="app store"
                    />
                  </li>
                  <li>
                    <img
                      src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg"
                      alt="app store"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
