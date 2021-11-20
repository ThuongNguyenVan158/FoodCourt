/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './HeaderClient.scss';

function HeaderClient() {
  const number = useSelector((state) => state.todoCart.number);
  return (
    <nav class="navbar fixed-top navbar-expand-lg header" id="mainNavbar">
      <div class="container-fluid d-flex order-lg-1">
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://www.thefoodcourtsl.com/foodcourt_infologo.png"
              alt
            />
          </Link>
        </div>
        <div className="header__ctn order-lg-3">
          {/* <div>
            <Link to="/" className="link">
              <i className="far fa-heart" />
              <span>Your Wishlist</span>
              <div className="qty">2</div>
            </Link>
          </div> */}
          <div>
            <Link to="/order" className="link">
              <i className="fa fa-shopping-cart" />
              <span>Giỏ hàng</span>
              <div className="qty">{number}</div>
            </Link>
          </div>
          <div>
            <Link to="/login" className="link">
              <i className="fa fa-user" />
              Đăng nhập
            </Link>
          </div>
        </div>
        <button
          class="navbar-toggler header__btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div
          class="collapse navbar-collapse order-lg-2"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <Link to="/" className="header__link nav-link">
              Trang chủ
            </Link>
            <Link to="/" className="header__link nav-link">
              Menu
            </Link>
            <Link to="/" className="header__link nav-link">
              Giới thiệu
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderClient;
