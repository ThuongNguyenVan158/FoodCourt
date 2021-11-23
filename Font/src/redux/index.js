import { configureStore } from "@reduxjs/toolkit";
import todoCart from "./Reducers/todoCart";
import paymentMethod from "./Reducers/paymentMethod";
import ThemeReducer from "./Reducers/ThemeReducer";
const rootReducer = {
  todoCart: todoCart,
  paymentMethod,
  ThemeReducer: ThemeReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
