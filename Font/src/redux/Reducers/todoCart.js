import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  number: 0,
  cartItem: [],
  
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemsIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemsIndex >= 0) {
        state.cartItem[itemsIndex].cartQuantity += 1;
      } else {
        const tempCart = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(tempCart);
      }
      state.number += 1;
    },
    removeCart(state, action) {
      state.number -= 1;
    },
  },
});

const { actions, reducer } = todoSlice;
export const { addToCart, removeCart } = actions;
export default reducer;
