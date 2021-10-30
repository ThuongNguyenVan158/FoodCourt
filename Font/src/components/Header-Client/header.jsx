import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <header id="header">
        {/* TOP HEADER */}
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li>
                <a href="#">
                  <i className="fa fa-phone" /> 0394003431
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="far fa-envelope" /> Hien@hcmut.edu.vn
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker" /> Ho Chi Minh
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">
              <li>
                <Link to="/login">
                  <i className="fa fa-user" />
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* /TOP HEADER */}
        {/* MAIN HEADER */}
        <div id="header">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* LOGO */}
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="#" className="logo">
                    <img src="./img/logo.png" alt />
                  </a>
                </div>
              </div>
              {/* /LOGO */}
              {/* SEARCH BAR */}
              <div className="col-md-6">
                <div className="header-search">
                  <form>
                    <input className="input-select" placeholder="Search here" />
                    <button className="search-btn">Search</button>
                  </form>
                </div>
              </div>
              {/* /SEARCH BAR */}
              {/* ACCOUNT */}
              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  {/* Wishlist */}
                  <div>
                    <a href="#">
                      <i className="far fa-heart" />
                      <span>Your Wishlist</span>
                      <div className="qty">2</div>
                    </a>
                  </div>
                  {/* /Wishlist */}
                  {/* Cart */}
                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <i className="fa fa-shopping-cart" />
                      <span>Your Cart</span>
                      <div className="qty">3</div>
                    </a>
                  </div>
                  {/* /Cart */}
                </div>
              </div>
              {/* /ACCOUNT */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* /MAIN HEADER */}
      </header>
    </div>
  );
}
