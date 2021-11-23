import { configureStore } from '@reduxjs/toolkit';
import todoCart from './Reducers/todoCart';
import paymentMethod from './Reducers/paymentMethod';
import loginUser from './Reducers/loginUser';
const rootReducer = {
  todoCart: todoCart,
  paymentMethod,
  loginUser,
};
export const store = configureStore({
  reducer: rootReducer,
});
