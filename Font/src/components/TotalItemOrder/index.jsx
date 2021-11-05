import React from "react";
import Button from "@mui/material/Button";
import "./style.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
          <Link style={{ textDecoration: "none" }} to="/checkout">
            PROCEED TO CHECKOUT
          </Link>
        </Button>
      </div>
    </div>
  );
}
