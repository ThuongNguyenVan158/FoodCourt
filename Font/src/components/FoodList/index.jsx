import React, { useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import FoodItem from "../FoodItem";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCart } from "../../redux/Reducers/todoCart";
export default function FoodList() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.todoCart.listCart);
  const fetchListCart = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/food/getListFoodbyName"
    );
    dispatch(fetchCart(res.data));
  };
  useEffect(() => {
    fetchListCart();
    console.log("listCart: ", listCart);
  }, []);

  return (
    <div className="flex-wrap mt-5 d-flex justify-content-between align-item-center ">
      {listCart.map((item, key) => (
        <FoodItem item={item} key={key} />
      ))}
    </div>
  );
}
