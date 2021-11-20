import { configureStore } from '@reduxjs/toolkit';
import todoCart from './Reducers/todoCart';
import paymentMethod from './Reducers/paymentMethod';
const rootReducer = {
  todoCart: todoCart,
  paymentMethod,
};
export const store = configureStore({
  reducer: rootReducer,
});
