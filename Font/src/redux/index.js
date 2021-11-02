import { configureStore } from "@reduxjs/toolkit";
import todoCart from "./Reducers/todoCart";
const rootReducer = {
  todoCart: todoCart,
};
export const store = configureStore({
  reducer: rootReducer,
});
