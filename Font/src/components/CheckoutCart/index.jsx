import React from 'react';
import './CheckoutCart.scss';
import { Item, RemoveCart } from './part';

const data = [
  {
    id: 1,
    title: 'Caramel Frappuccino',
    imgUrl:
      'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYXBwdWNjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Caramel syrup with coffee, milk, and whipped cream',
    price: 20000,
  },
  {
    id: 2,
    title: 'Caramel Frappuccino 2',
    imgUrl:
      'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYXBwdWNjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Caramel syrup with coffee, milk, and whipped cream',
    price: 10000,
  },
  {
    id: 3,
    title: 'Caramel Frappuccino 3',
    imgUrl:
      'https://images.unsplash.com/photo-1627998792088-f8016b438988?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYXBwdWNjaW5vfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    description: 'Caramel syrup with coffee, milk, and whipped cream',
    price: 15000,
  },
];
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
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
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
