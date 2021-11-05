import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./CheckoutCart.scss";
import { Item, RemoveCart } from "./part";
import { Link } from "react-router-dom";
function CheckoutCart(props) {
  const listItemCart = useSelector((state) => state.todoCart.cartItem);
  const total = useSelector((state) => state.todoCart.total);
  useEffect(() => {}, [listItemCart]);
  return (
    <>
      <div className="card checkout-cart">
        <div className="checkout-cart__header">
          <div>Các món đã chọn</div>
          <button className="btn btn-sm checkout-cart__add-item">
            <Link style={{ textDecoration: "none" }} to="/">
              Thêm món
            </Link>
          </button>
        </div>
        {listItemCart.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        <div className="checkout-cart__total">
          <div className="checkout-cart__total__header">Tổng cộng</div>
          <div className="checkout-cart__total__price">
            <div>Thành tiền</div>
            <div>{total} VND</div>
          </div>
        </div>
        <div className="checkout-cart__footer">
          <div className="checkout-cart__footer__total">
            <div>Thành tiền</div>
            <div className="checkout-cart__footer__total__price">
              {total} VND
            </div>
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
