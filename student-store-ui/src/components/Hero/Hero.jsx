import * as React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="heroItems">
        <div className="intro">
          Welcome!
          <h1 className="merch">Find your merch!</h1>
          <h2 className="intromsg">
            We have all kinds of goodies. Click on any of the items to start
            filling your shopping cart
          </h2>
        </div>
        <img
          className="hero-img"
          src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg"
        />
      </div>
    </div>
  );
}
