import React from 'react';
import OrderList from '../../../components/OrderList';
import './style.css';
export default function Order() {
  return (
    <div className="orderPage">
      <div className="orderPage__title text-center">Giỏ hàng của bạn</div>
      <OrderList />
    </div>
  );
}
