import React from "react";
import "./style.css";

import TotalItemOrder from "../TotalItemOrder";
import OrderItem from "../OrderItem";
export default function OrderList() {
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
                    <OrderItem />
                    <OrderItem />
                    <OrderItem />
                  </tbody>
                </table>
              </div>
            </div>
            <TotalItemOrder />
          </div>
        </div>
      </div>
    </div>
  );
}
