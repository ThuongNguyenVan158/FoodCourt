import React from "react";
import Button from "@mui/material/Button";
import {
  addToCart,
  decreaseCart,
  removeCart,
} from "../../redux/Reducers/todoCart";
import { useDispatch } from "react-redux";
export default function OrderItem(props) {
  const dispatch = useDispatch();
  const item = props.data;
  const addtoCart = () => {
    dispatch(addToCart(item));
  };
  const decrease = () => {
    dispatch(decreaseCart(item));
  };
  const removeCartItem = () => {
    dispatch(removeCart(item));
  };
  return (
    <tr>
      <td className="table-close-btn">
        <Button
          onClick={removeCartItem}
          type="button"
          className=" btn btn-delete mt-3 pd-3"
          variant="outlined"
          color="warning"
        >
          X
        </Button>
      </td>
      <td scope="row">
        <img src={item.food_img} alt="img" style={{ maxWidth: 100 }} />
      </td>
      <td className="item-name">
        <div className="details mt-3 pd-3">
          <h3>{item.name}</h3>
        </div>
      </td>
      <td>
        <h3 className="mt-3 pd-3">{item.price} VND</h3>
      </td>
      <td className="table-quantity">
        <form>
          <div className="quantity buttons_added d-flex justify-content-between mt-4">
            <Button
              onClick={() => decrease()}
              variant="contained"
              color="success"
              className="plus"
            >
              -
            </Button>
            <h4>{item.cartQuantity}</h4>
            <Button
              onClick={() => addtoCart()}
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
        <h3 className="mt-3 pd-3">{item.totalPriceItem} VND</h3>
      </td>
    </tr>
  );
}
