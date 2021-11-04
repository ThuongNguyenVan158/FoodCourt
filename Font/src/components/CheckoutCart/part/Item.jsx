import React from 'react';
import PropTypes from 'prop-types';
import './Item.scss';

function Item(props) {
  return (
    <>
      <div className="dish-cart">
        <div className="dish-cart__detail">
          <div className="d-flex flex-column p-1">
            <div>Cà phê đen đá</div>
            <div>Note</div>
            <button className="dish-cart__detail__remove">Xóa</button>
          </div>
        </div>
        <div className="d-flex align-items-center dish-cart__price">
          <div>10.000đ</div>
        </div>
      </div>
    </>
  );
}

Item.propTypes = {};

export default Item;
