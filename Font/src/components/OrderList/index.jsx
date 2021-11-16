import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import TotalItemOrder from "../TotalItemOrder";
import OrderItem from "../OrderItem";
export default function OrderList() {
  const CartItem = useSelector((state) => state.todoCart.cartItem);
  // const [state, setState] = useState(CartItem);
  console.log(CartItem);
  useEffect(() => {}, [CartItem]);
  return (
    <div>
      <div className="cart-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive mb-4">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="blank" />
                      <th className="blank" />
                      <th className="title-name">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CartItem.map((item, index) => {
                      return <OrderItem key={index} data={item} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-8"></div>
            <TotalItemOrder />
          </div>
        </div>
      </div>
    </div>
  );
}
