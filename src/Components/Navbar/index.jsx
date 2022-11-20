import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

export default function Navbar() {
  const cartData = useSelector((state) => state.cartData);
  console.log("cartData", cartData.length);
  return (
    <header>
      <section>
        {/* <!-- MAIN CONTAINER --> */}
        <div id="container">
          {/* <!-- SHOP NAME --> */}
          <div id="shopName">
            <a href="index.html">
              {" "}
              <b>SHOP</b>LANE{" "}
            </a>
          </div>

          <div id="collection">
            <div id="clothing">
              <a href="clothing.html"> CLOTHING </a>
            </div>
            <div id="accessories">
              <a href="accessories.html"> ACCESSORIES </a>
            </div>
          </div>

          <div id="search">
            <i className="fas fa-search search"></i>
            <input
              type="text"
              id="input"
              name="searchBox"
              placeholder="Search for Clothing and Accessories"
            />
          </div>

          <div id="user">
            <a href="/cart.html">
              {" "}
              <i className="fas fa-shopping-cart addedToCart">
                <div id="badge">{cartData.length}</div>
              </i>
            </a>
            <a href="/">
              <i className="fas fa-user-circle userIcon"></i>
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
