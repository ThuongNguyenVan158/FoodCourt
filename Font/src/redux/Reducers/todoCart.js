import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 0,
  cartItem: [],
  listCart: [],
  total: 0,
};
const todoCart = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchCart: (state, action) => {
      state.listCart = action.payload;
    },
    addToCart: (state, action) => {
      const itemsIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cartItem[itemsIndex].cartQuantity += 1;
        state.cartItem[itemsIndex].totalPriceItem =
          state.cartItem[itemsIndex].cartQuantity *
          state.cartItem[itemsIndex].price;
      } else {
        const tempCart = {
          ...action.payload,
          cartQuantity: 1,
          totalPriceItem: action.payload.price,
        };
        state.cartItem.push(tempCart);
      }
      state.number += 1;
      state.total += action.payload.price;
    },
    removeCart(state, action) {
      state.number -= 1;
    },
  },
});

const { actions, reducer } = todoCart;
export const { addToCart, removeCart, fetchCart } = actions;
export default reducer;
