import React from "react";
import Button from "@mui/material/Button";
import "./style.css";
import { useSelector } from "react-redux";
export default function TotalItemOrder() {
  const total = useSelector((state) => state.todoCart.total);
  return (
    <div className="col-lg-4 order-area">
      <div className="order-cart-area">
        <div className="order-cart">
          <h5>Cart totals</h5>
          <p>
            Total<span>{total} VNĐ</span>
          </p>
        </div>
        <Button
          color="warning"
          variant="contained"
          className="btn btn-secondary w-100"
        >
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  );
}
