import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import OrderList from "../../../components/OrderList";
import shape_01 from "../../../assets/shape-1.png";
import shape_02 from "../../../assets/shape-2.png";
export default function Order() {
  return (
    <div className="orderPage">
      <section className="breadcrumb-area">
        <div className="banner-bg-img"></div>
        <div className="banner-shape-1">
          <img src={shape_01} alt="img" />
        </div>
        <div className="banner-shape-2">
          <img src={shape_02} alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner text-center">
                <h3>Cart Page</h3>
                <h1>Check your box</h1>
                <div className="breadcrumb-mid">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a>
                        <Link to="/">Home</Link>
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OrderList />
    </div>
  );
}
