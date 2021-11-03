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
<<<<<<< HEAD

=======
  // const itemData = [
    // {
      // img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      // title: "Breakfast",
      // author: "@bkristastucchio",
      // rows: 2,
      // cols: 2,
      // featured: true,
    // },
    // {
      // img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      // title: "Burger",
      // author: "@rollelflex_graphy726",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      // title: "Camera",
      // author: "@helloimnik",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      // title: "Coffee",
      // author: "@nolanissac",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      // title: "Hats",
      // author: "@hjrc33",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      // title: "Honey",
      // author: "@arwinneil",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      // title: "Basketball",
      // author: "@tjdragotta",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      // title: "Fern",
      // author: "@katie_wasserman",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      // title: "Mushrooms",
      // author: "@silverdalex",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      // title: "Tomato basil",
      // author: "@shelleypauls",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      // title: "Sea star",
      // author: "@peterlaster",
    // },
    // {
      // img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      // title: "Bike",
      // author: "@southside_customs",
    // },
  // ];
>>>>>>> a193eea70abd9a9d30da7963b0cda2edd44be045
  return (
    <div className="flex-wrap mt-5 d-flex justify-content-between align-item-center ">
      {listCart.map((item, key) => (
        <FoodItem item={item} key={key} />
      ))}
    </div>
  );
}
