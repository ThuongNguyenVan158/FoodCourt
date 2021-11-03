/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './HeaderClient.css';

function HeaderClient() {
  const number = useSelector((state) => state.todoCart.number);
  return (
    <div>
      <header id="header">
        {/* MAIN HEADER */}
        {/* container */}
        <div className="container-fluid">
          {/* row */}
          <div className="row">
            <div className="col-md-2">
              <div className="header-logo">
                <Link to='/' className="logo">
                  <img
                    src="https://static.thenounproject.com/png/1680973-200.png"
                    alt
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-4 d-flex align-items-center px-0">
              <div className="header_links">
                <Link to='/' className="header__link">
                  Trang chủ
                </Link>
                <Link to='/' className="header__link">
                  Menu
                </Link>
                <Link to='/' className="header__link">
                  Giới thiệu
                </Link>
              </div>
            </div>
            <div className="col-md-3 px-0">
              <div className="header-search">
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 px-0">
              <div className="header-ctn">
                <div>
                  <a href="#" className="link">
                    <i className="far fa-heart" />
                    <span>Your Wishlist</span>
                    <div className="qty">2</div>
                  </a>
                </div>
                <div>
                  <a href="" className="link">
                    <i className="fa fa-shopping-cart" />
                    <span>Your Cart</span>
                    <div className="qty">{number}</div>
                  </a>
                </div>
                <div>
                  <Link to="/login" className="link">
                    <i className="fa fa-user" />
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default HeaderClient;
