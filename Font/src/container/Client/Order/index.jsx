import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import img_01 from "../../../assets/01.png";
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
                      <a href="home.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Cart</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    <tr>
                      <td className="table-close-btn">
                        <Button
                          type="button"
                          className=" btn btn-delete mt-3 pd-3"
                          variant="outlined"
                          color="warning"
                        >
                          X
                        </Button>
                      </td>
                      <td scope="row">
                        <img src={img_01} alt="img" />
                      </td>
                      <td className="item-name">
                        <div className="details mt-3 pd-3">
                          <h3>All Season Gulliver Pizza</h3>
                        </div>
                      </td>
                      <td>
                        <h3 className="mt-3 pd-3">$50.00</h3>
                      </td>
                      <td className="table-quantity">
                        <form>
                          <div className="quantity buttons_added">
                            <Button
                              variant="contained"
                              color="success"
                              className="plus"
                            >
                              -
                            </Button>
                            <input
                              type="number"
                              className="input-text qty text"
                              step={1}
                              min={1}
                              max={10000}
                              name="quantity"
                              defaultValue={1}
                            />
                            <Button
                              variant="contained"
                              color="success"
                              className="plus"
                            >
                              +
                            </Button>
                          </div>
                        </form>
                      </td>
                      <td>
                        <h3 className="mt-3 pd-3">$50.00</h3>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="promotional-area">
                <form className="default-form-wrap">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="single-input-wrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Coupon Code"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <Button variant="contained">Apply Coupon</Button>
                    </div>
                    <div className="col-md-4 col-sm-6 text-md-end">
                      <Button variant="outlined" color="error">
                        Update
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-cart-area">
                <div className="order-cart">
                  <h5>Cart totals</h5>
                  <ul>
                    <li>
                      Subtotal<span>$50.00</span>
                    </li>
                    <li className="total">
                      Total<span>$50.00</span>
                    </li>
                  </ul>
                </div>
                <Button className=" btn-secondary w-100">
                  PROCEED TO CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
