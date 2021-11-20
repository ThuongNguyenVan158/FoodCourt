import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './CheckoutCart.scss';
import { Item, RemoveCart } from './part';
import { utils } from '../../helpers';

const { formatMoney } = utils;

function CheckoutCart(props) {
  const listItemCart = useSelector((state) => state.todoCart.cartItem);
  const total = useSelector((state) => state.todoCart.total);
  const paymentMethod = useSelector((state) => state.paymentMethod.method);
  useEffect(() => {}, [listItemCart]);

  const handleSubmitOrder = () => {
    const orderPayment = {
      listItemCart,
      total,
      paymentMethod,
    };
    console.log('Order Payment: ', orderPayment);
  };
  return (
    <>
      <div className="card checkout-cart">
        <div className="checkout-cart__header">
          <div>Các món đã chọn</div>
          <button className="btn btn-sm checkout-cart__add-item">
            <Link to="/" className="checkout-cart__add-item__link">
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
            <div>{formatMoney(total)}</div>
          </div>
        </div>
        <div className="checkout-cart__footer">
          <div className="checkout-cart__footer__total">
            <div>Thành tiền</div>
            <div className="checkout-cart__footer__total__price">
              {formatMoney(total)}
            </div>
          </div>
          <button
            className="btn checkout-cart__footer__btn"
            onClick={handleSubmitOrder}
          >
            Đặt hàng
          </button>
        </div>
      </div>
      <RemoveCart />
    </>
  );
}

CheckoutCart.propTypes = {};

export default CheckoutCart;
