import React from 'react';
import './RemoveCart.scss';


function RemoveCart(props) {
  return (
    <div className="text-center pt-2">
      <button className="remove-cart">
        <i className="fas fa-trash" /> <span>Xóa đơn hàng</span>
      </button>
    </div>
  );
}

RemoveCart.propTypes = {};

export default RemoveCart;
