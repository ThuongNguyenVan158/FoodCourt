import React from "react";
import "./style.css";
import Button from "@mui/material/Button";
import img_01 from "../../assets/01.png";
import TotalItemOrder from "../TotalItemOrder";
export default function OrderItem() {
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
            <TotalItemOrder />
          </div>
        </div>
      </div>
    </div>
  );
}
