import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
export default function FoodItem(props) {
  const item = props.item;
  const linkToDetail = `detail/${item.id}`;
  return (
    <div className=" mb-5 col-5 ">
      <div className="food-card bg-white rounded-lg overflow-hidden mb-4 shadow">
        <div className="food-card_img position-relative">
          <img src={item.food_img} alt="img" />
          <a href="#!">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section overflow-hidden">
            <h4 className="food-card_title">
              <a href="#!" className="text-dark">
                <Link to={linkToDetail}> {item.name} </Link>
              </a>
            </h4>
            <div className="d-flex justify-content-between">
              <h2
                style={{ fontSize: 30, fontWeight: "bold", marginTop: 10 }}
                className="food-card_author"
              >
                {item.type}
              </h2>
              <div className="rating-box">
                <Rating
                  style={{ fontSize: 30, marginTop: 10 }}
                  name="read-only"
                  value={5}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="food-card_bottom-section">
            <div className="d-flex justify-content-between">
              <div>
                <span className="fa fa-fire" /> 220 - 280 Kcal
              </div>
              <div>
                <span className="badge badge-success">Veg</span>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <div className="food-card_price">
                <span> {item.price} VND</span>
              </div>
              <div className="food-card_order-count">
                <Button
                  sx={{ fontSize: 15 }}
                  style={{ width: 120 }}
                  color="success"
                  variant="outlined"
                >
                  Add To Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
