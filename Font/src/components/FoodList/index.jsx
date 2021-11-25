import React, { useEffect, useState } from "react";
import FoodItem from "../FoodItem";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCart } from "../../redux/Reducers/todoCart";
import Skelection from "../Skelection";
export default function FoodList() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.todoCart.listCart);
  const fetchListCart = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/food/getListFoodbyName"
    );
    dispatch(fetchCart(res.data));
    await setLoading(true);
  };
  useEffect(() => {
    fetchListCart();
  }, []);
  useEffect(() => {
    console.log("ListCart: ", listCart);
  }, [loading]);
  useEffect(() => {}, [listCart]);

  return loading === true ? (
    <div className="flex-wrap mt-5 d-flex justify-content-between align-item-center ">
      {listCart.map((item, key) => (
        <FoodItem item={item} key={key} />
      ))}
    </div>
  ) : (
    <Skelection />
  );
}
