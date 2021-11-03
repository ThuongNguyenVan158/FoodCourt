import React from "react";
import Button from "@mui/material/Button";
export default function TotalItemOrder() {
  return (
    <div>
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
          <Button className=" btn-secondary w-100">PROCEED TO CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
}
