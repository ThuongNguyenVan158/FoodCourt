import React from 'react';
import PropTypes from 'prop-types';
import { Item, RemoveCart } from './part';
import './CheckoutCart.scss';

function CheckoutCart(props) {
  return (
    <>
      <div className="card checkout-cart">
        <div className="checkout-cart__header">
          <div>Các món đã chọn</div>
          <button className="btn btn-sm checkout-cart__add-item">
            Thêm món
          </button>
        </div>
        <Item />
        <Item />
        <div className="checkout-cart__total">
          <div className="checkout-cart__total__header">Tổng cộng</div>
          <div className="checkout-cart__total__price">
            <div>Thành tiền</div>
            <div>10.000đ</div>
          </div>
        </div>
        <div className="checkout-cart__footer">
          <div className="checkout-cart__footer__total">
            <div>Thành tiền</div>
            <div className="checkout-cart__footer__total__price">35.000đ</div>
          </div>
          <button className="btn checkout-cart__footer__btn">Đặt hàng</button>
        </div>
      </div>
      <RemoveCart />
    </>
  );
}

CheckoutCart.propTypes = {};

export default CheckoutCart;
